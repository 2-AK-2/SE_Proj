# A cab aggregator system

**Project ID:** P14  
**Course:** UE23CS341A  
**Academic Year:** 2025  
**Semester:** 5th Sem  
**Campus:** RR  
**Branch:** CSE  
**Section:** A  
**Team:** Cabify

## 📋 Project Description

A OLA/Uber kind of app

This repository contains the source code and documentation for the A cab aggregator system project, developed as part of the UE23CS341A course at PES University.

## 🧑‍💻 Development Team (Cabify)

- [@2-AK-2](https://github.com/2-AK-2) - Scrum Master
- [@Aasma1306](https://github.com/Aasma1306) - Developer Team
- [@aania17](https://github.com/aania17) - Developer Team
- [@akshaya-prakasha](https://github.com/akshaya-prakasha) - Developer Team

## 👨‍🏫 Teaching Assistant

- [@jeevana-pes](https://github.com/jeevana-pes)
- [@MasterOogway1466](https://github.com/MasterOogway1466)
- [@kripasrai](https://github.com/kripasrai)

## 👨‍⚖️ Faculty Supervisor

- *No valid faculty GitHub username found*


## 🚀 Getting Started

### Prerequisites
- [List your prerequisites here]

### Installation
1. Clone the repository
   ```bash
   git clone https://github.com/pestechnology/PESU_RR_CSE_A_P14_A_cab_aggregator_system_Cabify.git
   cd PESU_RR_CSE_A_P14_A_cab_aggregator_system_Cabify
   ```

2. Install dependencies
   ```bash
   # Add your installation commands here
   ```

3. Run the application
   ```bash
   # Add your run commands here
   ```

## 📁 Project Structure

```
PESU_RR_CSE_A_P14_A_cab_aggregator_system_Cabify/
├── src/                 # Source code
├── docs/               # Documentation
├── tests/              # Test files
├── .github/            # GitHub workflows and templates
├── README.md          # This file
└── ...
```

## 🛠️ Development Guidelines

### Branching Strategy
- `main`: Production-ready code
- `develop`: Development branch
- `feature/*`: Feature branches
- `bugfix/*`: Bug fix branches

### Commit Messages
Follow conventional commit format:
- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation changes
- `style:` Code style changes
- `refactor:` Code refactoring
- `test:` Test-related changes

### Code Review Process
1. Create feature branch from `develop`
2. Make changes and commit
3. Create Pull Request to `develop`
4. Request review from team members
5. Merge after approval

## 📚 Documentation

- [API Documentation](docs/api.md)
- [User Guide](docs/user-guide.md)
- [Developer Guide](docs/developer-guide.md)

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests with coverage
npm run test:coverage
```

## 📄 License

This project is developed for educational purposes as part of the PES University UE23CS341A curriculum.

---

**Course:** UE23CS341A  
**Institution:** PES University  
**Academic Year:** 2025  
**Semester:** 5th Sem

## CI/CD Pipeline

[cite_start]This project uses GitHub Actions for Continuous Integration and Continuous Deployment (CI/CD)[cite: 4233]. The pipeline is defined in `.github/workflows/ci.yml` and is designed to ensure code quality, test coverage, and security.

The pipeline runs on every `push` and `pull_request` to the `main` branch.

### Pipeline Stages

[cite_start]Our pipeline consists of 5 main stages, as required by the project rubric[cite: 4234]:

1.  [cite_start]**Build:** Installs all `npm` dependencies for both the `backend` and `frontend` using `npm ci` to ensure reproducible builds[cite: 4235].
2.  [cite_start]**Test & Coverage:** Runs the full test suite (Unit, Integration, and System tests) for both backend and frontend using `jest`[cite: 4236].
3.  [cite_start]**Coverage (Quality Gate):** This stage simultaneously checks if the test coverage meets the **$\ge 75\%$** project requirement[cite: 4237, 4242]. If coverage is below 75%, the pipeline fails.
4.  [cite_start]**Lint (Quality Gate):** Performs static code analysis using `ESLint` to check for code style and errors[cite: 4238]. Lint reports are saved as artifacts.
5.  [cite_start]**Security:** Runs `npm audit` on both `backend` and `frontend` to scan for known vulnerabilities in dependencies[cite: 4239]. Security reports are saved as artifacts.

### Deployment Artifact

[cite_start]After all 5 stages pass, a final job creates the **Deployment Artifact**[cite: 4240]. This job:
1.  Downloads all reports (Coverage, Lint, Security).
2.  Copies the source code (`react_ak/`), the `README.md`, and `package.json` files.
3.  Zips all these files into a single `deployment-package.zip` file.
4.  Uploads this zip file as a GitHub Artifact, ready for evaluation.

### [cite_start]Running Locally [cite: 4245]

You can run the key pipeline stages locally:

```bash
# From root directory
# Run Backend Tests (with coverage check)
npm run coverage --prefix react_ak/backend

# Run Frontend Tests (with coverage check)
npm run coverage --prefix react_ak/frontend

# Run Backend Lint
npm run lint --prefix react_ak/backend

# Run Backend Security Scan
npm run security --prefix react_ak/backend
```