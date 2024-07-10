import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OverlayComponent, OverlayInput } from './overlay/overlay.component';
import { CardInput } from './overlay/card/card.component';
import { StickyBarComponent } from './sticky-bar/sticky-bar.component';
import { ParallaxBackgroundComponent } from './parallax-background/parallax-background.component';
import { LandingComponent } from './landing/landing.component';
import { CommonModule } from '@angular/common';

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
    CommonModule,
  ],
})
export class AppComponent {
  title = 'ryo-kam';
  thredInternCards: Array<CardInput> = [
    {
      heading: 'Full-Stack Development',
      description: [
        'Went from no prior experience in full-stack + cloud infrastructure development to handling Trello tickets independently over the course of the internship.',
        'Contributed to projects on our monorepo, such as a cloud-based ERP replacement for SAP and our SaaS product.',
      ],
      footer:
        'Technologies: Angular, NestJs, PostgreSQL, Prisma ORM, Nx, Cloud Run, Firebase',
    },
    {
      heading: 'Java + React Module',
      description: [
        'Independently learned Java, React and Ignition SDK to develop a module to send real-time data on Ignition to the cloud via Google Cloud Pub/Sub and Cloud Storage, with a React user interface.',
        'Built APIs to communicate across the Java module and React UI.',
        'Stress-tested the module with Rust, Java, Python, Javascript and managed to reach 100,000 messages / second.',
      ],
      footer:
        'Technologies: Java, React, Ignition, Pub/Sub, Cloud Storage, Google Cloud Platform',
    },
    {
      heading: 'SaaS Product DSL',
      description: [
        'Designed a simple domain-specific language and editor using Monaco Editor to allow relational references between entities in the database to be defined in free-text in a browser.',
        'Fully featured with syntax highlighting and inline suggestions of entities in the database.',
      ],
      footer: 'Technologies: Angular, NestJs, PostgreSQL, Monaco Editor',
    },
    {
      heading: 'Real-Time Factory Data Dashboard',
      description: [
        'Created a data pipline to extract factory data from MQTT and regularly scheduled emails with Excel report attachments, store raw data in TimescaleDB raw events table, aggregate data using DBT models and display real-time factory performance metrics using Grafana.',
      ],
      footer: 'Technologies: DBT, MQTT, TimescaleDB, SQL, NodeRED, Grafana',
    },
    {
      heading: 'Web-Scraping Factory Metrics',
      description: [
        'Developed an automatic web-scraping process on NodeRED to scrape an HMI webpage on the factory network as part of a data pipeline.',
        'Then created a daily report with Ignition Perspective, hosted on our edge device in the factory network.',
      ],
      footer:
        'Technologies: NodeRED, Ignition Designer, SQL, Ignition Designer',
    },
    {
      heading: 'Ignition HMI For Power Plant',
      description: [
        "Developed a simple HMI in Ignition Perspective for monitoring and controlling a small scale power plant. Wrote a Python script to automate the process of converting the client's OPC UA device and address data in Excel into Ignition Tag format.",
      ],
      footer: 'Technologies: Python, Ignition Designer',
    },
  ];
  ehqCards: Array<CardInput> = [
    {
      heading: 'Restoring Another Branch',
      description: [
        'Managed the restoration of the puzzles at the Hamilton branch after the previous technician left the branch in disrepair.',
        'This involved taking extended trips down to Hamilton to fix entire rooms and setting up the necessary infrastructure for the game masters to run the puzzles smoothly.',
        'Other peripheral tasks included teaching the game master how to deal with problems encountered during the game.',
      ],
    },
    {
      heading: 'Moving A Room',
      description: [
        'Completed the process of moving one of the rooms from Hamilton up to the Auckland branch over the course of a few months.',
        "Set up multiple Raspberry Pi's and ESP32s with code that I re-wrote from Hamilton to integrate with a central switch board to control all the puzzles.",
      ],
    },
  ];

  overlayInputs: Array<OverlayInput> = [
    {
      title: 'Thred',
      startDate: 'Nov 2023',
      endDate: 'Jul 2024',
      position: 'Intern (3 months) -> Junior Engineer',
      cardInputs: this.thredInternCards,
      descriptions: [
        'Worked autonomously through Trello board tickets, quickly picking up any new technologies needed on the job.',
        'Adapted to an AGILE work environment with daily stand-ups and open office space. Trello boards to keep track of feature tickets for each project.',
        'Below are highlights on the contributions I made to the projects that I worked on at Thred.',
      ],
    },
    {
      title: 'EscapeHQ',
      startDate: 'Feb 2023',
      endDate: 'Apr 2024',
      position: 'Puzzle Technician (Contractor)',
      cardInputs: this.ehqCards,
      descriptions: [
        'As the sole technician, I managed to adapt and learn the puzzles mostly by myself and fixed the puzzles independently.',
        'The contracting nature of the job, with the fact that I was in university, working another job, or both over the contract meant that I had to manage, find, and invoice hours and parts for the fix to the owner.',
        'Physical technologies: soldering, electronics wiring, power tools.',
        'Software technologies: Python, C, Arduino, Raspberry Pi, ESP32, Linux, SSH, Houdini MC, ',
        'Below are highlights on the lasting contributions I made at EscapeHQ',
      ],
    },
    {
      title: 'Daruma Sushi',
      startDate: 'Sep 2021',
      endDate: 'Nov 2023',
      position: 'Waiter',
      descriptions: [
        'Worked as a waiter at a higher-end restaurant, occasionally helping out in the kitchen when there was free time at the FoH.',
        'Learned to conduct myself in a professional manner with a customer demographic who expects excellent service.',
        'Taught a few new hires the ropes of the job and some etiquette in dealing with customers.',
      ],
    },
  ];

  otherProjects: Array<OverlayInput> = [
    {
      title: 'AI Bird-Counting',
      descriptions: [
        'Developed a computer vision model to identify bird species by using an R-CNN to classify Fourier transform waveforms of the audio recording as part of a project to use 360° cameras and computer vision to conduct bird counts.',
        'Receive an award for the best end-of-year presentation in the Engineering Science cohort.',
      ],
      image: '/assets/bird-count.png',
    },
    {
      title: 'Hydroponics',
      descriptions: [
        'Designed and iterated on a hydroponics farm design for growing microflowers out of season.',
        'Using an ebb and flow method for the nutrient water, with lights and pumps automated using Home Assistant.',
      ],
      image: '/assets/hydroponics.jpg',
    },
    {
      title: 'Resume website',
      descriptions: [
        'Built with Angular and Tailwind CSS, using GitHub Pages to host the static website.',
        'Responsive and dark mode friendly.',
        'Programmatically generated Pensrose tiling background.',
        'https://github.com/ryo-kam/ryo-kam.github.io',
      ],
      image: '/assets/penrose.png',
    },
  ];

  get stickyBarInput() {
    return ['Work Experience', 'Projects', 'Education'];
  }
}
