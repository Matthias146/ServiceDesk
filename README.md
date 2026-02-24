# ServiceDesk Pro

ServiceDesk Pro ist ein modernes **B2B / Enterprise-Ticket-System** als Portfolio- und Lernprojekt.  
Das Ziel des Projekts ist es, eine realistische Admin-/Operations-App mit **sauberer Angular-Architektur** aufzubauen – inklusive Rollen, Ticket-Management, Dashboard und später Backend-Anbindung.

Der Fokus liegt auf **modernem Angular (Standalone)**, einer klaren Projektstruktur und einer professionellen, iterativen Entwicklung mit kleinen Git-Commits.

---

## Tech Stack

- **Angular** (Standalone)
- **TypeScript**
- **SCSS**
- **Angular Router**

> Geplant für spätere Phasen:
- NgRx Signal Store
- NestJS
- TypeORM
- JWT Auth

---

## Project Structure

Die App ist von Anfang an in einer **Enterprise-ähnlichen Struktur** aufgebaut:

- `core/`  
  Globale App-Bereiche wie Layout, Auth, Guards, Services (wird in den nächsten Schritten ausgebaut)

- `shared/`  
  Wiederverwendbare Komponenten, Utilities und gemeinsame Bausteine

- `features/`  
  Fachliche Module / Seiten der App, z. B.:
  - Dashboard
  - Tickets
  - Customers
  - Users
  - Audit Log
  - Settings
  - Login / Auth

---

## Current Status

### Bereits umgesetzt
- Angular-Projekt erstellt (Standalone + SCSS + Routing)
- Grundstruktur mit `core`, `shared`, `features` angelegt
- Erste Feature-Seiten erstellt (Platzhalter)
- Base Routing eingerichtet
- `AppComponent` als schlanker Root mit `router-outlet`
- App Shell in Routing integrieren (Child Routes)
- Login-Seite außerhalb der Shell
- App Shell (Header + Sidebar + Content Layout)

### Aktuell in Arbeit
- Mock Auth + Rollenmodell


### Nächste Schritte
- Guards vorbereiten

---

## Getting Started

### Voraussetzungen
- Node.js (empfohlen: aktuelle LTS-Version)
- npm
- Angular CLI

### Installation
```bash
npm install
