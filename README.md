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

## 🛠️ CI/CD Pipeline

This project uses GitHub Actions. The workflow is defined in `.github/workflows/ci.yml`.

### Stages
1.  **Build:** `npm run build` (Ensures code compiles)
2.  **Test:** `npm test -- --coverage` (Checks functionality & >75% coverage)
3.  **Lint:** `npm run lint` (Checks code style)
4.  **Security:** `npm audit` (Checks dependencies)
5.  **Package:** Creates a deployment artifact

### Security Mitigation
The security scan identified vulnerabilities in `react-scripts` dependencies (e.g., `nth-check`). These are upstream issues that cannot be fixed without breaking the build tool. We have reviewed them and set the pipeline to `continue-on-error` for this stage.

---

### Phase 4: Commit and Push

Once you have done these 3 phases locally:

1.  **Run tests locally** (`npm test -- --coverage --watchAll=false`) to verify everything is green.
2.  **Commit everything:**
    ```powershell
    git add .
    git commit -m "fix: Fix build/test errors and improve coverage >75%"
    git push origin feature/rate-driver
    3.  **Merge your PR** into `develop` on GitHub.

This plan directly addresses the errors in your logs and the requirements in your rubric. Start with Phase 1!