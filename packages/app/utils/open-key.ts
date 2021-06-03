export function getOpenKeyNotationColor(key: string) {
  const map = {
    '1d': '#FE3FEA',
    '1m': '#FE3FEA',
    '2d': '#AB64FD',
    '2m': '#AB64FD',
    '3d': '#3E8AFD',
    '3m': '#3E8AFD',
    '4d': '#00C9FE',
    '4m': '#00C9FE',
    '5d': '#00E7E7',
    '5m': '#00E7E7',
    '6d': '#00D58F',
    '6m': '#00D58F',
    '7d': '#3DEF3D',
    '7m': '#3DEF3D',
    '8d': '#97FD00',
    '8m': '#97FD00',
    '9d': '#FED600',
    '9m': '#FED600',
    '10d': '#F98C28',
    '10m': '#F98C28',
    '11d': '#FE642D',
    '11m': '#FE642D',
    '12d': '#FC4949',
    '12m': '#FC4949'
  };

  return map[key];
}

export function getOpenKeyNotation(key: string) {
  // In the Open Key Notation, a key X typically harmonizes with itself and the keys X±1 (with 0=12 and 1=13).
  // Additionally, every key can be in a mode, i.e. major or minor.
  // This is denoted by a d for Dur (major) and an m for Moll (minor).
  // As long as the number stays the same, you can switch between d and m.

  // Flat: ♭
  // Sharp: ♯
  // Minor: min / m
  // Major: maj / d

  const map = {};

  [
    'A min',
    'E min',
    'B min',
    'F♯ min',
    'C♯ min',
    'G♯ min',
    'D♯ min',
    'B♭ min',
    'F min',
    'C min',
    'G min',
    'D min'
  ].map((key, index) => (map[key] = `${index + 1}m`));

  [
    'C maj',
    'G maj',
    'D maj',
    'A maj',
    'E maj',
    'B maj',
    'F♯ maj',
    'D♭ maj',
    'A♭ maj',
    'E♭ maj',
    'B♭ maj',
    'F maj'
  ].map((key, index) => (map[key] = `${index + 1}d`));

  map['E♭ min'] = map['D♯ min'];
  map['D♭ min'] = map['C♯ min'];
  map['A♭ min'] = map['G♯ min'];
  map['A♯ min'] = map['B♭ min'];

  map['G♭ maj'] = map['F♯ maj'];
  map['C♯ maj'] = map['D♭ maj'];
  map['D♯ maj'] = map['E♭ maj'];
  map['G♯ maj'] = map['A♭ maj'];
  map['A♯ maj'] = map['B♭ maj'];

  return map[key];
}
