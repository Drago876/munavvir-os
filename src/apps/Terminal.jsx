import { useEffect, useRef, useState } from 'react';
import AppHeading from './AppHeading.jsx';

// SAFE TO EDIT: This is the full supported command list shown by `help`.
const helpText = 'Commands: help, whoami, about, skills, projects, ai, linux, cyber, games, clear';

// Maps recognized app-opening commands to the id used by Desktop and a readable response.
const appCommands = {
  skills: ['skills', 'skills'],
  projects: ['projects', 'projects'],
  ai: ['ai-lab', 'AI Lab'],
  linux: ['linux', 'Linux'],
  cyber: ['cyber-lab', 'Cyber Lab'],
  games: ['game-zone', 'Game Zone'],
};

function Terminal({ onOpenApp }) {
  // TERMINAL HISTORY: Each entry is a rendered line; new commands append their responses here.
  const [history, setHistory] = useState([
    { type: 'system', text: 'MUNAVVIR_OS // fictional portfolio terminal' },
    { type: 'system', text: 'Type help to view the available commands.' },
  ]);
  // The controlled input stores the text currently being typed before Enter is pressed.
  const [command, setCommand] = useState('');
  // Refs let the output auto-scroll and let clear return keyboard focus to the input.
  const outputRef = useRef(null);
  const inputRef = useRef(null);

  // After output changes, scroll the transcript to the newest line.
  useEffect(() => {
    outputRef.current?.scrollTo({ top: outputRef.current.scrollHeight, behavior: 'smooth' });
  }, [history]);

  // This is a browser simulation. It intentionally does not execute operating-system shell commands.
  // TERMINAL COMMAND ROUTING: Form submission happens on Enter and never invokes a shell.
  // The typed command is normalized, matched against this fixed list, then adds local output.
  function runCommand(event) {
    event.preventDefault();
    const typed = command.trim();
    if (!typed) return;
    // Normalize case and repeated whitespace so equivalent input matches consistently.
    const normalized = typed.toLowerCase().replace(/\s+/g, ' ');
    const nextHistory = [...history, { type: 'command', text: typed }];
    setCommand('');

    if (normalized === 'clear') {
      // `clear` is a UI-only command: remove transcript lines and keep typing ready.
      setHistory([]);
      inputRef.current?.focus();
      return;
    }

    if (normalized === 'sudo coffee') {
      // EASTER EGG: This playful response is text only; no program is installed or launched.
      nextHistory.push({ type: 'secret', text: '☕ Coffee.exe installed. Productivity buff: emotionally plausible.' });
    } else if (normalized === 'help') {
      nextHistory.push({ type: 'output', text: helpText });
    } else if (normalized === 'whoami') {
      nextHistory.push({ type: 'output', text: 'Munavvir Musthafa' });
    } else if (normalized === 'about') {
      nextHistory.push({ type: 'output', text: 'BCA graduate learning web development and exploring AI, Linux, and data analytics.' });
    } else if (appCommands[normalized]) {
      const [appId, appName] = appCommands[normalized];
      nextHistory.push({ type: 'system', text: `Opening ${appName}...` });
      onOpenApp(appId);
    } else if (normalized === 'sudo') {
      nextHistory.push({ type: 'error', text: 'This fictional terminal does not have administrator commands.' });
    } else {
      nextHistory.push({ type: 'error', text: `Command not found: ${typed}. Type help for the command list.` });
    }
    setHistory(nextHistory);
  }

  return (
    <div className="app-page">
      <AppHeading eyebrow="LOCAL CONSOLE / 09" title="TERMINAL" intro="A fictional command interface. Commands only update this page; nothing runs on your device." status="SANDBOXED" />
      <div className="terminal-app">
        <div className="terminal-output" ref={outputRef} role="log" aria-live="polite" aria-label="Terminal output">
          {history.map((entry, index) => <div className={`terminal-line terminal-line-${entry.type}`} key={`${index}-${entry.text}`}>{entry.text}</div>)}
        </div>
        {/* Enter submits this form to runCommand; this field never reaches the OS shell. */}
        <form className="terminal-form" onSubmit={runCommand}>
          <label htmlFor="terminal-command">&gt;</label>
          <input ref={inputRef} id="terminal-command" autoComplete="off" spellCheck="false" value={command} onChange={(event) => setCommand(event.target.value)} aria-label="Enter a fictional terminal command" />
        </form>
      </div>
      <p className="terminal-hint">TRY: whoami · skills · projects · ai · sudo coffee</p>
    </div>
  );
}

export default Terminal;