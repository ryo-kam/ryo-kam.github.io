import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OverlayComponent, OverlayInput } from './overlay/overlay.component';
import { CardInput } from './overlay/card/card.component';
import { StickyBarComponent } from './sticky-bar/sticky-bar.component';
import { ParallaxBackgroundComponent } from './parallax-background/parallax-background.component';
import { LandingComponent } from './landing/landing.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    RouterOutlet,
    OverlayComponent,
    StickyBarComponent,
    ParallaxBackgroundComponent,
    LandingComponent,
  ],
})
export class AppComponent {
  title = 'ryo-kam';
  thredInternCards: Array<CardInput> = [
    {
      heading: 'Cloud-Hosted ERP',
      description:
        'Contributed to full-stack + cloud infrastructure development of a manufacturing process ERP system to replace SAP.',
      footer:
        'Technologies: Angular, NestJs, PostgreSQL, Prisma ORM, Nx, Cloud Run, Firebase',
    },
    {
      heading: 'Real-Time Factory Data Dashboard',
      description:
        'Retrieve factory data remotely from MQTT and regularly scheduled emails with Excel report attachments. Aggregated these data using DBT models and created a Grafana dashboard showing real-time key factory performance metrics.',
      footer: 'Technologies: Excel, MQTT, TimescaleDB, SQL, NodeRED, Grafana',
    },
    {
      heading: 'Java Module',
      description:
        'Sole developer working on a module in Java for Ignition (a SCADA / HMI software) in order to retrieve real-time data from Ignition and send it to Google Cloud Pub/Sub + Cloud Storage, as well as a user interface in React with APIs built into the Java module.',
      footer:
        'Technologies: Java, React, Ignition Gateway, Pub/Sub, Cloud Storage, Google Cloud Platform',
    },
    {
      heading: 'Daily Reporting + Factory Metrics',
      description:
        'Retrieve factory data by remotely accessing and scraping a HMI website on the factory network and collecting generated CSV files on NodeRED. Then, created a daily report on Ignition served on our edge device in the factory network.',
      footer: 'Technologies: NodeRED, TimescaleDB, SQL, Ignition Designer',
    },
    {
      heading: 'Ignition SCADA For Power Plant',
      description:
        "A SCADA in Ignition Perspective for monitoring and controlling a small scale power plant. Wrote a Python script to automate the process of converting the client's OPC UA device and address data in Excel into Ignition Tag format.",
      footer: 'Technologies: Python, Ignition Designer',
    },
    {
      heading: 'AGILE Philosophy Workplace',
      description:
        'With a Trello board to keep track of issues / features, daily stand-ups, and an open office environment, every member worked autonomously for the most part.',
    },
  ];
  ehqCards: Array<CardInput> = [
    {
      heading: 'Sole Technician For 2 Branches',
      description:
        'I was the sole technician at Takapuna for the entire duration of the contract and later also took on responsibility for the re-development of the Hamilton branch which was in disrepair. Managed my own time to diagnose problems, go out and buy necessary equipment and components, fix the issues, write an invoice, report the cause, and suggest possible preventative steps as quickly as possible within the schedule filled with university work / work at Thred.',
    },
    {
      heading: 'Adapting to Each Problem',
      description:
        'In order to diagnose non-obvious problems, I had to quickly adapt to new ways of diagnosing puzzles. Starting from learning how to figure out what every wire and component does and checking the connections using a multi-meter all the way to ',
    },
    {
      heading: 'Variety of Technologies',
      description: '',
    },
  ];

  overlayInputs: Array<OverlayInput> = [
    {
      title: 'Thred',
      startDate: 'Nov 2023',
      endDate: 'Jul 2024',
      position: 'Intern (3 months) -> Junior Engineer',
      cardInputs: this.thredInternCards,
    },
    {
      title: 'EscapeHQ',
      startDate: 'Feb 2023',
      endDate: 'April 2024',
      position: 'Puzzle Technician (Contractor)',
      cardInputs: this.ehqCards,
    },
  ];

  get overlayIds() {
    return this.overlayInputs.map((overlayInput) => overlayInput.title);
  }
}
