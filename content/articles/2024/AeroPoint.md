---
title: "AeroPoint"
date: 2024-09-15T18:54:53-04:00
image: images/2024-thumbs/AeroPoint.png
draft: false
author: "Matt Hammond"
description: "AeroPoint is a comprehensive aviation waypoint management system designed to help users create, manage, and export waypoints and associated files for use in various aviation platforms, particularly ForeFlight. The software allows for organized storage of waypoints, plates, map layers, and associated files within program-specific containers."
---

# AeroPoint Documentation

{{< rawhtml >}}

<center><img src="/images/2024/AeroPoint/AeroPoint.png" alt="AeroPoint" title="AeroPoint" width="200"></center>
{{< /rawhtml >}}

## Table of Contents

1. [Introduction](#introduction)
2. [Getting Started](#getting-started)
3. [Core Features](#core-features)
4. [Programs](#programs)
5. [Waypoints](#waypoints)
6. [File Management](#file-management)
7. [Export Options](#export-options)
8. [User Interface Elements](#user-interface-elements)
9. [Feature Requests](#feature-requests)
10. [Tips and Tricks](#tips-and-tricks)

## Introduction

AeroPoint is a comprehensive aviation waypoint management system designed to help users create, manage, and export waypoints and associated files for use in various aviation platforms, particularly ForeFlight. The software allows for organized storage of waypoints, plates, map layers, and associated files within program-specific containers.

## Getting Started

### User Access

- Users must be invited to access the system
- Each user belongs to one or more groups
- Groups determine which programs a user can access
- Admin users have access to all programs

### Initial Setup

1. Log in with provided credentials
2. Select or create a program
3. Begin adding waypoints or importing existing data

## Core Features

### Program Management

- Create and manage multiple programs
- Each program contains its own:
  - Waypoints
  - Plates
  - Map Layers
  - Associated Files
- Programs can be shared across user groups

### File Organization

The system organizes files into four main categories:

1. **Waypoint Files** - Files associated with specific waypoints
2. **Plates** - Airport plates and procedures
3. **Layers** - Map overlay files
4. **Files** - General program-related files

### Dropbox Integration

- Optional connection to Dropbox for automatic file syncing
- When connected:
  - Content packs are saved to `/Apps/ForeFlight/contentpack/`
  - Program files are saved to `/Apps/ForeFlight/`
- Without Dropbox:
  - All files are downloaded directly to your device

## Programs

### Creating a Program

1. Navigate to Settings
2. Click "Create Program"
3. Enter:
   - Program Name
   - Program Code (unique identifier)
   - Select Group

### Program Selection

- Use the dropdown at the top of the page to switch between programs
- Click "Switch Program" to activate the selected program

## Waypoints

### Adding Waypoints

Waypoints can be added in two ways:

1. **Individual Entry**:

   - Click "Add" in the navigation bar
   - Fill in waypoint details
   - Supports multiple coordinate formats:
     - Decimal Degrees (DD): 40.446151
     - Degrees Decimal Minutes (DDM): 40 26.769 N
     - Degrees Minutes Seconds (DMS): 40 26 46.14 N

2. **Bulk Import**:
   - Click "Import" in the navigation bar
   - Upload CSV file with waypoint data
   - Choose existing program or create new one

### Waypoint Types

- Target (default)
- Hazard (shown in red bold text)
- Diamond
- Square
- Triangle
- Pushpin

### Airport Waypoints

- Check "Airport" checkbox to designate as airport
- FAA Identifier required for airport waypoints
- Cannot be marked as hazard

### Waypoint Files

- Upload PDF or TXT files to individual waypoints
- Blue dot indicator shows waypoints with attached files
- Files are included in exports based on export type

## File Management

### Plates Tab

- Upload airport plates and procedures
- Requires:
  - FAA Identifier (4 characters)
  - Procedure Type selection
- Files are stored in the `byop` directory during export

### Layers Tab

Supports multiple map layer formats:

- KML files
- MBTiles
- FBTiles
- Geospatial PDF

### Files Tab

- General file storage for program
- No format restrictions
- Files stored here are:
  - Downloaded individually during export
  - Placed in ForeFlight root when using Dropbox

## Export Options

### ForeFlight Export

Two main export options:

1. **Content Pack**:

   - Creates ForeFlight-compatible package
   - Includes all selected programs and states
   - Organizes files into appropriate directories:
     - `/navdata/` - Waypoints and county names
     - `/layers/` - Map layers and county boundaries
     - `/byop/` - Plates and procedures
   - With Dropbox:
     - Package saved to `/Apps/ForeFlight/contentpack/`
     - Program files saved to `/Apps/ForeFlight/`
   - Without Dropbox:
     - Downloads as zip file
     - Program files downloaded separately

2. **Individual Files**:
   - Downloads each file separately
   - Includes:
     - Program waypoints (CSV or KML)
     - State files
     - Program files
     - Plates
     - Layers
     - Waypoint files

### CAD Export

- Exports waypoints in CSV format
- Includes all waypoint details
- Suitable for CAD software import

### Avionics Export

- Generates Garmin 650/750 compatible waypoint file
- Exports in .wpt format

## User Interface Elements

### Navigation Bar

- Home - View waypoints and program files
- Add - Create new waypoint
- Export - Access export options
- Import - Import waypoint data
- User Menu:
  - Account settings
  - Program settings
  - Feature requests
  - Logout

### Visual Indicators

- Blue dot: Waypoint has attached files
- Red bold text: Hazard waypoint
- Loading spinner: Shows during export operations

## Feature Requests

Users can request new features:

1. Click username in top-right
2. Select "Request Feature"
3. Fill out the feature request form
4. Submit for consideration

## Tips and Tricks

### File Naming

- Original filenames are preserved during upload
- Spaces in filenames are maintained
- Only during ForeFlight export are spaces converted to underscores

### State Files

- County boundaries available for multiple states
- Automatically included in layers directory
- County names included in navdata directory

### Tab Persistence

- System remembers active tab between operations
- Maintains tab selection during file operations

### Hazard Waypoints

- Automatically exported as KML regardless of export option
- Cannot be marked as airports
- Visually distinct in waypoint list

### Program Organization

- Use meaningful program codes
- Group related waypoints in same program
- Utilize description field for detailed information

### Export Considerations

- Content packs require program selection
- States can be exported without program selection
- Dropbox connection streamlines ForeFlight integration

### File Management

- Regular cleanup of unused files recommended
- Use appropriate tabs for different file types
- Check file indicators before export
