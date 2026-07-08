/**
 * ICRC Schedule Configuration
 * ============================
 * This is the ONLY file you need to edit between seasons.
 * index.html is a permanent template — never touch it for season changes.
 *
 * SEASON TRANSITION CHECKLIST:
 * 1. Update titlePrefix, titleHighlight, titleSuffix below
 * 2. Update parks[] if locations change (usually stays the same)
 * 3. Replace leagues[] with your new sport/league structure
 * 4. Add team avatar images (TeamName.png) to the repo root
 * 5. Reset scores.json in the repo to just: {}
 * 6. Commit everything → Cloudflare deploys automatically
 *
 * MULTI-SPORT SEASONS (e.g. Fall with Soccer + Football):
 * Set a different "sport" value per league — the sidebar will
 * automatically create grouped headers (Soccer / Flag Football / etc.)
 * when more than one sport is present.
 *
 * VENUE ABBREVIATIONS:
 * Add entries to venueExpansions{} to map short codes to full names.
 * Any code not listed here is displayed as-is.
 */

var SEASON_CONFIG = {

  // ----- Topnav title -----
  // Displays as: titlePrefix [titleHighlight] titleSuffix
  // titleHighlight appears in green (brand accent color)
  titlePrefix:    'Summer',
  titleHighlight: 'Basketball',
  titleSuffix:    'Schedules',

  // ----- Parks -----
  parks: [
    { id: 'p1', name: 'Chapin' },
    { id: 'p2', name: 'Irmo'   }
  ],

  // ----- Venue expansions -----
  // Maps abbreviations used in schedule[] to full display names
  venueExpansions: {
    'CCP 1': 'Crooked Creek Park Court 1',
    'CCP 2': 'Crooked Creek Park Court 2',
    'CCP 3': 'Crooked Creek Park Court 3'
  },

  // ----- Leagues -----
  // id:        unique key — also becomes the key in scores.json
  // parkId:    must match a park id above
  // sport:     used to group leagues in sidebar when multiple sports present
  // name:      full display name shown in the section header
  // shortName: short label used in mobile standings tabs
  // schedule:  array of [date, time, awayTeam, homeTeam, venueCode]
  leagues: [

    // ── 9-11 Basketball ──────────────────────────────────────
    {
      id:        'p1_b9-11',
      parkId:    'p1',
      sport:     'Basketball',
      name:      '9-11 Summer Basketball',
      shortName: '9-11',
      // primary: main shield fill color  |  accent: top band color
      teamColors: {
        'Bucks':   { primary: '#00471B', accent: '#EEE1C6' },
        'Cavs':    { primary: '#860038', accent: '#041E42' },
        'Hawks':   { primary: '#C8102E', accent: '#FDB927' },
        'Raptors': { primary: '#753BBD', accent: '#000000' }
      },
      schedule: [
        ['Monday, June 22',    '6:00 PM', 'Bucks',   'Hawks',    'CCP 1'],
        ['Monday, June 22',    '7:00 PM', 'Raptors',  'Cavs',    'CCP 1'],
        ['Monday, June 29',    '6:00 PM', 'Raptors',  'Bucks',   'CCP 1'],
        ['Monday, June 29',    '7:00 PM', 'Cavs',     'Hawks',   'CCP 1'],
        ['Monday, July 6',     '6:00 PM', 'Cavs',     'Bucks',   'CCP 1'],
        ['Monday, July 6',     '7:00 PM', 'Hawks',    'Raptors', 'CCP 1'],
        ['Monday, July 13',    '6:00 PM', 'Raptors',  'Cavs',    'CCP 1'],
        ['Monday, July 13',    '7:00 PM', 'Hawks',    'Bucks',   'CCP 1'],
        ['Monday, July 20',    '6:00 PM', 'Hawks',    'Cavs',    'CCP 1'],
        ['Monday, July 20',    '7:00 PM', 'Bucks',    'Raptors', 'CCP 1'],
        ['Wednesday, July 22', '6:00 PM', 'Raptors',  'Hawks',   'CCP 1'],
        ['Wednesday, July 22', '7:00 PM', 'Bucks',    'Cavs',    'CCP 1'],
        ['Monday, July 27',    '6:00 PM', 'Bucks',    'Hawks',   'CCP 1'],
        ['Monday, July 27',    '7:00 PM', 'Raptors',  'Cavs',    'CCP 1'],
        ['Wednesday, July 29',    '6:00 PM', 'Cavs',     'Hawks',   'CCP 1'],
        ['Wednesday, July 29',    '7:00 PM', 'Raptors',  'Bucks',   'CCP 1']
      ]
    },

    // ── 12-14 Basketball ─────────────────────────────────────
    {
      id:        'p1_b12-14',
      parkId:    'p1',
      sport:     'Basketball',
      name:      '12-14 Summer Basketball',
      shortName: '12-14',
      teamColors: {
        'Celtics':  { primary: '#007A33', accent: '#BA9653' },
        'Clippers': { primary: '#1D428A', accent: '#C8102E' },
        'Magic':    { primary: '#0077C0', accent: '#ffffff' },
        'Spurs':    { primary: '#C4CED4', accent: '#000000' },
        'Rockets':  { primary: '#CE1141', accent: '#000000' }
      },
      schedule: [
        ['Tuesday, June 23',   '6:00 PM', 'Clippers', 'Magic',    'CCP 1'],
        ['Tuesday, June 23',   '7:00 PM', 'Celtics',  'Spurs',    'CCP 1'],
        ['Thursday, June 25',  '6:00 PM', 'Magic',    'Celtics',  'CCP 1'],
        ['Thursday, June 25',  '7:00 PM', 'Spurs',    'Rockets',  'CCP 1'],
        ['Thursday, July 2',   '6:00 PM', 'Rockets',  'Magic',    'CCP 1'],
        ['Thursday, July 2',   '7:00 PM', 'Celtics',  'Clippers', 'CCP 1'],
        ['Thursday, July 9',   '6:00 PM', 'Clippers', 'Rockets',  'CCP 1'],
        ['Thursday, July 9',   '7:00 PM', 'Magic',    'Spurs',    'CCP 1'],
        ['Tuesday, July 14',   '6:00 PM', 'Spurs',    'Clippers', 'CCP 1'],
        ['Tuesday, July 14',   '7:00 PM', 'Rockets',  'Celtics',  'CCP 1'],
        ['Thursday, July 16',  '6:00 PM', 'Spurs',    'Celtics',  'CCP 1'],
        ['Thursday, July 16',  '7:00 PM', 'Magic',    'Clippers', 'CCP 1'],
        ['Tuesday, July 21',   '6:00 PM', 'Rockets',  'Spurs',    'CCP 1'],
        ['Tuesday, July 21',   '7:00 PM', 'Celtics',  'Magic',    'CCP 1'],
        ['Thursday, July 23',  '6:00 PM', 'Clippers', 'Celtics',  'CCP 1'],
        ['Thursday, July 23',  '7:00 PM', 'Magic',    'Rockets',  'CCP 1'],
        ['Tuesday, July 28',   '6:00 PM', 'Spurs',    'Magic',    'CCP 1'],
        ['Tuesday, July 28',   '7:00 PM', 'Rockets',  'Clippers', 'CCP 1'],
        ['Thursday, July 30',  '6:00 PM', 'Celtics',  'Rockets',  'CCP 1'],
        ['Thursday, July 30',  '7:00 PM', 'Clippers', 'Spurs',    'CCP 1']
      ]
    },

    // ── 15-18 Basketball ─────────────────────────────────────
    {
      id:        'p1_b15-18',
      parkId:    'p1',
      sport:     'Basketball',
      name:      '15-18 Summer Basketball',
      shortName: '15-18',
      teamColors: {
        'Heat':     { primary: '#98002E', accent: '#F9A01B' },
        'Knicks':   { primary: '#006BB6', accent: '#F58426' },
        'Pelicans': { primary: '#85714D', accent: '#0C2340' },
        'Thunder':  { primary: '#EF3B24', accent: '#007AC1' },
        'Wolves':   { primary: '#0C2340', accent: '#78BE20' }
      },
      schedule: [
        ['Tuesday, June 23',   '6:00 PM', 'Heat',     'Thunder',  'CCP 2'],
        ['Tuesday, June 23',   '7:00 PM', 'Knicks',   'Pelicans', 'CCP 2'],
        ['Thursday, June 25',  '6:00 PM', 'Pelicans', 'Heat',     'CCP 2'],
        ['Thursday, June 25',  '7:00 PM', 'Thunder',  'Wolves',   'CCP 2'],
        ['Thursday, July 2',   '6:00 PM', 'Wolves',   'Pelicans', 'CCP 2'],
        ['Thursday, July 2',   '7:00 PM', 'Heat',     'Knicks',   'CCP 2'],
        ['Thursday, July 9',   '6:00 PM', 'Knicks',   'Wolves',   'CCP 2'],
        ['Thursday, July 9',   '7:00 PM', 'Pelicans', 'Thunder',  'CCP 2'],
        ['Tuesday, July 14',   '6:00 PM', 'Thunder',  'Knicks',   'CCP 2'],
        ['Tuesday, July 14',   '7:00 PM', 'Wolves',   'Heat',     'CCP 2'],
        ['Thursday, July 16',  '6:00 PM', 'Pelicans', 'Knicks',   'CCP 2'],
        ['Thursday, July 16',  '7:00 PM', 'Thunder',  'Heat',     'CCP 2'],
        ['Tuesday, July 21',   '6:00 PM', 'Wolves',   'Thunder',  'CCP 2'],
        ['Tuesday, July 21',   '7:00 PM', 'Heat',     'Pelicans', 'CCP 2'],
        ['Thursday, July 23',  '6:00 PM', 'Knicks',   'Heat',     'CCP 2'],
        ['Thursday, July 23',  '7:00 PM', 'Pelicans', 'Wolves',   'CCP 2'],
        ['Tuesday, July 28',   '6:00 PM', 'Thunder',  'Pelicans', 'CCP 2'],
        ['Tuesday, July 28',   '7:00 PM', 'Wolves',   'Knicks',   'CCP 2'],
        ['Thursday, July 30',  '6:00 PM', 'Heat',     'Wolves',   'CCP 2'],
        ['Thursday, July 30',  '7:00 PM', 'Knicks',   'Thunder',  'CCP 2']
      ]
    }

  ] // end leagues
}; // end SEASON_CONFIG
