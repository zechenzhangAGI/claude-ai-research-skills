import assert from 'node:assert/strict';
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';
import test from 'node:test';

test('uninstallAllSkills removes only links that resolve inside the canonical directory', () => {
  const home = mkdtempSync(join(tmpdir(), 'ai-research-skills-'));
  const script = `
    import assert from 'node:assert/strict';
    import { existsSync, lstatSync, mkdirSync, rmSync, symlinkSync } from 'node:fs';
    import { join } from 'node:path';
    import { homedir } from 'node:os';
    import { uninstallAllSkills } from './src/installer.js';

    const linkExists = (path) => {
      try {
        lstatSync(path);
        return true;
      } catch {
        return false;
      }
    };

    const home = homedir();
    const skillsPath = join(home, '.agents', 'skills');
    const canonicalTarget = join(home, '.orchestra', 'skills', '01-testing', 'owned');
    const unrelatedTarget = join(home, 'shared-skills', 'unrelated');
    const prefixCollisionTarget = join(home, '.orchestra', 'skills-other', 'collision');
    const brokenTarget = join(home, 'shared-skills', 'broken');
    mkdirSync(canonicalTarget, { recursive: true });
    mkdirSync(unrelatedTarget, { recursive: true });
    mkdirSync(prefixCollisionTarget, { recursive: true });
    mkdirSync(brokenTarget, { recursive: true });
    mkdirSync(skillsPath, { recursive: true });

    const ownedLink = join(skillsPath, 'owned');
    const unrelatedLink = join(skillsPath, 'unrelated');
    const prefixCollisionLink = join(skillsPath, 'prefix-collision');
    const brokenLink = join(skillsPath, 'broken');
    symlinkSync(canonicalTarget, ownedLink, 'junction');
    symlinkSync(unrelatedTarget, unrelatedLink, 'junction');
    symlinkSync(prefixCollisionTarget, prefixCollisionLink, 'junction');
    symlinkSync(brokenTarget, brokenLink, 'junction');
    rmSync(brokenTarget, { recursive: true, force: true });

    await uninstallAllSkills([{ name: 'Shared Agents', skillsPath }]);

    assert.equal(linkExists(ownedLink), false);
    assert.equal(linkExists(unrelatedLink), true);
    assert.equal(linkExists(prefixCollisionLink), true);
    assert.equal(linkExists(brokenLink), true);
    assert.equal(existsSync(unrelatedTarget), true);
  `;

  try {
    const result = spawnSync(process.execPath, ['--input-type=module', '--eval', script], {
      cwd: process.cwd(),
      env: { ...process.env, HOME: home, USERPROFILE: home },
      encoding: 'utf8',
    });

    assert.equal(result.status, 0, result.stderr || result.stdout);
  } finally {
    rmSync(home, { recursive: true, force: true });
  }
});
