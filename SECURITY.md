# Security Policy

## Current scope

The repository currently contains planning documents only. When software development begins, security requirements in the [product requirements](docs/07-product/product-requirements.md) and [technical architecture](docs/08-technology/data-and-architecture.md) become mandatory acceptance criteria.

## Reporting a vulnerability

Do not create a public issue containing a suspected vulnerability, credential, personal information, waiver record, or payment detail. Report it privately to the repository owners through an approved TRIMNDS security contact. A dedicated security mailbox must be created before public launch and added here.

## Minimum controls before launch

- multi-factor authentication for privileged users;
- least-privilege role-based access;
- hosted payment collection with no card data stored by HTX Super League;
- encrypted transport and managed encryption at rest;
- audit logs for administrative and financial actions;
- tested backups and restore procedures;
- secret management outside source control;
- dependency, code, and deployment scanning;
- incident response and participant notification procedures;
- documented data retention and deletion rules.

