process.stdout.write('prompt >');
process.stdin.on('data', data => {
  const cmd = data.toString().trim();

  if (cmd === 'pwd') {
    const cwd = process.cwd();
    process.stdout.write('current: ' + cwd);
  } else {
    process.stdout.write('You typed: ' + cmd);
  }
  process.stdout.write('\nprompt > ');
});
