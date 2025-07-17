const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
    console.log('Hello Kitty Theme is now active! 🎀');

    // Star Repository command
    let starRepo = vscode.commands.registerCommand('helloKittyTheme.starRepo', () => {
        vscode.env.openExternal(vscode.Uri.parse('https://github.com/oguzhan18/hello-kitty-vscode-theme'));
        vscode.window.showInformationMessage('🎀 Thank you for considering to star our repository! 💖');
    });

    // View Gallery command
    let viewGallery = vscode.commands.registerCommand('helloKittyTheme.viewGallery', () => {
        vscode.env.openExternal(vscode.Uri.parse('https://marketplace.visualstudio.com/items?itemName=HelloKittyVSCodeTheme.hello-kitty-theme'));
        vscode.window.showInformationMessage('🎨 Opening Hello Kitty Theme Gallery!');
    });

    // Open Documentation command
    let openDocs = vscode.commands.registerCommand('helloKittyTheme.openDocs', () => {
        vscode.env.openExternal(vscode.Uri.parse('https://github.com/oguzhan18/hello-kitty-vscode-theme#readme'));
        vscode.window.showInformationMessage('📖 Opening Hello Kitty Theme Documentation!');
    });

    // Show Welcome Message command
    let showWelcome = vscode.commands.registerCommand('helloKittyTheme.showWelcome', () => {
        vscode.window.showInformationMessage('🎀 Welcome to Hello Kitty Theme! 💖', 
            '⭐ Star Repository', '🎨 View Gallery', '📖 Documentation')
            .then(selection => {
                if (selection === '⭐ Star Repository') {
                    vscode.commands.executeCommand('helloKittyTheme.starRepo');
                } else if (selection === '🎨 View Gallery') {
                    vscode.commands.executeCommand('helloKittyTheme.viewGallery');
                } else if (selection === '📖 Documentation') {
                    vscode.commands.executeCommand('helloKittyTheme.openDocs');
                }
            });
    });

    // Toggle Font Family command
    let toggleFont = vscode.commands.registerCommand('helloKittyTheme.toggleFont', () => {
        const config = vscode.workspace.getConfiguration('editor');
        const currentFont = config.get('fontFamily');
        
        if (currentFont.includes('Comic Sans')) {
            config.update('fontFamily', "'Segoe UI', 'Arial', sans-serif");
            vscode.window.showInformationMessage('🎀 Font changed to Segoe UI!');
        } else {
            config.update('fontFamily', "'Comic Sans MS', 'Comic Sans', 'Segoe UI', 'Arial', sans-serif");
            vscode.window.showInformationMessage('🎀 Font changed to Comic Sans MS!');
        }
    });

    // Show Snippets command
    let showSnippets = vscode.commands.registerCommand('helloKittyTheme.showSnippets', () => {
        vscode.window.showInformationMessage('🎀 Hello Kitty Snippets Available:', 
            'hkr - React Component', 'hkf - Function', 'hkl - Console Log', 'hka - CSS Animation')
            .then(selection => {
                if (selection === 'hkr - React Component') {
                    vscode.window.showInformationMessage('Type "hkr" in a .js or .jsx file!');
                } else if (selection === 'hkf - Function') {
                    vscode.window.showInformationMessage('Type "hkf" in any JavaScript file!');
                } else if (selection === 'hkl - Console Log') {
                    vscode.window.showInformationMessage('Type "hkl" for Hello Kitty console log!');
                } else if (selection === 'hka - CSS Animation') {
                    vscode.window.showInformationMessage('Type "hka" in a CSS file!');
                }
            });
    });

    // Toggle Theme Intensity command
    let toggleThemeIntensity = vscode.commands.registerCommand('helloKittyTheme.toggleIntensity', () => {
        vscode.window.showInformationMessage('🎀 Theme intensity toggled! (Feature coming soon)');
    });

    // Show Git Snippets command
    let showGitSnippets = vscode.commands.registerCommand('helloKittyTheme.showGitSnippets', () => {
        vscode.window.showInformationMessage('🎀 Hello Kitty Git Snippets Available:', 
            'hkgit - Commit Message', 'hkbug - Bug Fix', 'hkdoc - Documentation', 'hkstyle - Style', 'hkrefactor - Refactor')
            .then(selection => {
                if (selection === 'hkgit - Commit Message') {
                    vscode.window.showInformationMessage('Type "hkgit" in a git commit message!');
                } else if (selection === 'hkbug - Bug Fix') {
                    vscode.window.showInformationMessage('Type "hkbug" for bug fix commits!');
                } else if (selection === 'hkdoc - Documentation') {
                    vscode.window.showInformationMessage('Type "hkdoc" for documentation commits!');
                } else if (selection === 'hkstyle - Style') {
                    vscode.window.showInformationMessage('Type "hkstyle" for style commits!');
                } else if (selection === 'hkrefactor - Refactor') {
                    vscode.window.showInformationMessage('Type "hkrefactor" for refactor commits!');
                }
            });
    });

    // Show Debug Info command
    let showDebugInfo = vscode.commands.registerCommand('helloKittyTheme.showDebugInfo', () => {
        vscode.window.showInformationMessage('🎀 Hello Kitty Debug Features:', 
            'Pink debug console', 'Hello Kitty breakpoints', 'Colored stack traces', 'Custom debug icons')
            .then(selection => {
                vscode.window.showInformationMessage('🎀 All debug features are automatically applied!');
            });
    });

    // Show File Icons command
    let showFileIcons = vscode.commands.registerCommand('helloKittyTheme.showFileIcons', () => {
        vscode.window.showInformationMessage('🎀 Hello Kitty File Icons:', 
            'React/Vue files', 'Docker files', 'Test files', 'API files', 'Database files', 'Git files')
            .then(selection => {
                vscode.window.showInformationMessage('🎀 All file icons are automatically applied!');
            });
    });

    // Check if this is the first time the extension is activated
    let isFirstTime = context.globalState.get('helloKittyTheme.firstTime', true);
    
    if (isFirstTime) {
        // Show welcome message after a short delay
        setTimeout(() => {
            vscode.window.showInformationMessage(
                '🎀 Welcome to Hello Kitty Theme! 💖\n\nIf you love this theme, please consider giving us a ⭐ star on GitHub!',
                '⭐ Star Repository', '🎨 View Gallery', '📖 Documentation', '❌ Don\'t show again'
            ).then(selection => {
                if (selection === '⭐ Star Repository') {
                    vscode.commands.executeCommand('helloKittyTheme.starRepo');
                } else if (selection === '🎨 View Gallery') {
                    vscode.commands.executeCommand('helloKittyTheme.viewGallery');
                } else if (selection === '📖 Documentation') {
                    vscode.commands.executeCommand('helloKittyTheme.openDocs');
                } else if (selection === '❌ Don\'t show again') {
                    context.globalState.update('helloKittyTheme.firstTime', false);
                }
            });
        }, 2000); // Show after 2 seconds

        // Mark as not first time
        context.globalState.update('helloKittyTheme.firstTime', false);
    }

    // Register commands
    context.subscriptions.push(starRepo);
    context.subscriptions.push(viewGallery);
    context.subscriptions.push(openDocs);
    context.subscriptions.push(showWelcome);
    context.subscriptions.push(toggleFont);
    context.subscriptions.push(showSnippets);
    context.subscriptions.push(toggleThemeIntensity);
    context.subscriptions.push(showGitSnippets);
    context.subscriptions.push(showDebugInfo);
    context.subscriptions.push(showFileIcons);
}

function deactivate() {
    console.log('Hello Kitty Theme is now deactivated! 🎀');
}

module.exports = {
    activate,
    deactivate
}; 