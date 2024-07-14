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
      heading: 'New Room Proof of Concept',
      description: [
        'Designed and built working proof of concept from owner’s specifications, from initial research and component procurement to programming, wiring, and testing.',
      ],
    },
    {
      heading: 'Major Branch Restoration Project',
      description: [
        'Led the restoration of a different branch in disrepair and recreated/adapted room setups, as well as updating documentation and instructing new room operators on basic troubleshooting protocols.',
      ],
    },
    {
      heading: 'Moving A Room',
      description: [
        'Completed the process of moving one of the rooms from Hamilton up to the Auckland branch over the course of a few months.',
        "Set up the room in the Auckland branch and adapted the designs to be better suited to the branch's infrastructure.",
      ],
    },
  ];

  overlayInputs: Array<OverlayInput> = [
    {
      title: 'Thred',
      startDate: 'Nov 2023',
      endDate: 'Jul 2024',
      position: 'Intern (3 months) -> Software & Data Engineer',
      cardInputs: this.thredInternCards,
      descriptions: [
        'Worked on both client-based and internal projects, autonomously developing features through Trello board tickets and quickly picking up any new skills and technologies needed on the job.',
        'Adapted to an AGILE work environment with daily stand-ups and open office space. Trello boards to keep track of feature tickets for each project.',
        'Went from no prior experience in full-stack + cloud infrastructure development to handling Trello tickets independently over the course of the internship.',
      ],
    },
    {
      title: 'EscapeHQ',
      startDate: 'Feb 2023',
      endDate: 'Apr 2024',
      position: 'Game Operations Engineer',
      cardInputs: this.ehqCards,
      descriptions: [
        'As the sole engineer in the company, developed, documented, and maintained the game infrastructure and electronics at the branch, and later took on the same responsibilities for another branch.',
        'The contracting nature of the job meant that I was responsible for every aspect of the work from managing, finding, and invoicing hours to procuring tools and parts.',
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
        'Built a responsive static webpage with Angular and Tailwind CSS, using GitHub Pages to host.',
        'Programmatically generated Pensrose tiling background.',
      ],
      image: '/assets/penrose.png',
    },
  ];

  get stickyBarInput() {
    return ['Work Experience', 'Projects', 'Education'];
  }
}
