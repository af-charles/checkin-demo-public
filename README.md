**Automated Check-In System for Guided Tours**

**Overview**

The Automated Check-In System is an operations automation solution designed to streamline guest check-in, guide assignment, and ticket cost tracking for guided tours.
Once a guest is checked in and assigned to a guide, their information is automatically routed to the corresponding guide sheet, while real-time summaries compute guest counts and ticket costs by age group and tour level.

The system reduces manual data entry and reconciliations, eliminates duplication errors, and provides operational visibility during live tour operations through automation and structured decision logic.

**System Architecture**

The system is built around three core components:

1. Main Check-In Sheet – Central guest database and operational trigger point

2. Individual Guide Sheets – Automatically maintained guest lists per guide

3. Summary Tables – Real-time guest counts and ticket cost calculations

All components are synchronized using Google Apps Script, enabling real-time updates and rule-based automation.

**Main Check-In Sheet (Central Guest Database)**

Purpose: The Main Check-In Sheet acts as the single source of truth for all guest records. All operational logic originates from this sheet.


**How It Works**

1. A guest arrives and their Check-In Status is set to Show

2. A guide is assigned in the Guide column

3. The system automatically updates the corresponding guide sheet

4. Guests marked as No-show or Cancelled are excluded from guide sheets

_This ensures only valid, active guests are processed operationally._


**Guide Sheets (Individual Guest Lists)**

Each guide has a dedicated sheet that updates automatically based on guest assignments in the Main Check-In Sheet.

Automation Logic

- Guests appear on a guide’s sheet only once

- Duplicate entries are automatically removed

- Guests marked as No-show or Cancelled are automatically removed

- Guide sheets always reflect the current operational state

_This eliminates manual copy-paste workflows and ensures guide-level accuracy._



**Summary Tables (Guest Counts & Ticket Costs)**

Each guide sheet contains a dynamic summary table providing real-time operational metrics.

**Summary Outputs**

- Guest counts by age group:

- Ticket costs split booking level:

- Total cost to be paid per guide

**Calculation Logic**

- Ticket cost is calculated per guest based on:
    - Age group
    - ET level (Summit or Second Floor)

- Total cost per category = Guest Count × Ticket Price

- Final total aggregates Summit and Second Floor costs

_This supports operational reconciliation and purchasing decisions during live tours._


**Operational Constraint Handling**

Each guide sheet includes a Summit Status dropdown (Summit Opened / Summit Closed).

Behavior

- Summit Opened
    - Guests remain in their originally booked ET level

- Summit Closed
    - All Summit guests are reclassified to Second Floor
    - Summit column is hidden
    - Counts and costs are automatically reallocated

_This allows the system to adapt dynamically to real-world operational constraints without manual rework._


**Automation & Google Apps Script Logic**

Key Automated Processes

- onEdit Trigger
    - Detects changes in the Main Check-In Sheet

- updateGuideSheets()
    - Routes guests to the correct guide sheet
    - Removes duplicates
    - Cleans invalid records

- addTicketSummaryWithExactMatch()
    - Generates guest count summaries
    - Calculates ticket costs
    - Adjusts logic when Summit is closed

_All updates occur automatically and in real time._


**How to Use the System**

- Check in guests
    - Set Check-In Status to Show
    - Assign a guide

- Automatic guide update
    - Guests appear on the correct guide sheet

- Control summit status
    - Select Summit Opened or Summit Closed

- Review summary
    - Guest counts and ticket costs update automatically

_No manual reconciliation is required._


**Demo & Proof**

**Live Demo (Password-Protected)**

A functional, browser-based demo of the Automated Check-In System is deployed on Netlify and protected with basic authentication.

- Live demo: https://velvety-squirrel-7c2af3.netlify.app/

- Access: Password-protected (credentials shared on request)

- Data: Synthetic data only (no client or production data)

_The demo replicates the full operational logic of the system, including guest check-ins, guide assignment, state-dependent access rules, and real-time operational summaries._


**What the Demo Proves**

The live demo is designed to demonstrate system behavior, not UI polish. Specifically, it proves:

- Automated routing of checked-in guests from a single source of truth

- Elimination of manual copy-paste between operational views

- Real-time aggregation of guest counts and ticket costs

- Correct handling of operational constraints (e.g. Summit closed)

- Consistent system state across guide-level views and summaries

_All logic shown in the demo corresponds directly to the automation described in this repository._


**Scope & Limitations**

- This is an evaluation build, not a production system

- Uses synthetic data only

- Authentication is intentionally simple to support reviewer access

- UI is secondary to automation reliability and decision logic


**Requesting Access**

If you would like to evaluate the live demo:

- Contact: afwaedem99@gmail.com

- Subject: Request access – Automated Check-In Demo

_Access credentials are shared individually._
