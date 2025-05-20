import * as vscode from 'vscode';
import player from 'play-sound';

const play = player();

function playSong() {
  const mp3Path = vscode.Uri.joinPath(
    vscode.extensions.getExtension('osaeedi.ah-push-it')!.extensionUri, 
    'media',
    'push-it.mp3'
  ).fsPath;

  play.play(mp3Path, (err: Error | null) => {
    if (err) {
      console.error('Failed to play:', err);
    }
  });
}

export function activate(context: vscode.ExtensionContext) {
  console.log('Push It extension is now active!');

  const disposable = vscode.commands.registerCommand('extension.pushWithMusic', () => {
    const terminal = vscode.window.createTerminal('Push with Music');
    terminal.sendText('git push');
    terminal.show();
    playSong();
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}
