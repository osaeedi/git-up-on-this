import * as vscode from 'vscode';
import * as cp from 'child_process';

function playRandomClip() {
  const extension = vscode.extensions.getExtension('OrhanSaeedi.git-up-on-this');
  if (!extension) {
    console.error('Extension not found.');
    return;
  }

  const mp3Path = vscode.Uri.joinPath(
    extension.extensionUri,
    'media',
    'push-it.mp3'
  ).fsPath;

  const maxStart = 235; // seconds
  const start = Math.floor(Math.random() * maxStart);
  const command = `ffplay -nodisp -autoexit -ss ${start} -t 5 "${mp3Path}"`;

  cp.exec(command, (err) => {
    if (err) {
      console.error('Failed to play clip:', err.message);
    }
  });
}

export function activate(context: vscode.ExtensionContext) {
  console.log('Git up on this! is now active.');

  const pushCommand = vscode.commands.registerCommand('git-music.push', () => {
    const terminal = vscode.window.createTerminal('git push');
    terminal.sendText('git push');
    terminal.show();
    playRandomClip();
  });

  context.subscriptions.push(pushCommand);
}

export function deactivate() {}
