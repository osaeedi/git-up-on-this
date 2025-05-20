import * as vscode from 'vscode';
import * as cp from 'child_process';

function playRandomClip() {
  const mp3Path = vscode.Uri.joinPath(
    vscode.extensions.getExtension('osaeedi.ah-push-it')!.extensionUri,
    'media',
    'push-it.mp3'
  ).fsPath;

  const maxStart = 240; // seconds (song duration - clip length)
  const start = Math.floor(Math.random() * maxStart);

  const command = `ffplay -nodisp -autoexit -ss ${start} -t 5 "${mp3Path}"`;

  cp.exec(command, (err) => {
    if (err) {
      console.error('Failed to play clip:', err.message);
    }
  });
}

export function activate(context: vscode.ExtensionContext) {
  console.log('Push It extension is now active!');

  const disposable = vscode.commands.registerCommand('extension.pushWithMusic', () => {
    const terminal = vscode.window.createTerminal('Push with Music');
    terminal.sendText('git push');
    terminal.show();
    playRandomClip();
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}
