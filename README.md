# Shoply
Shoply is a clothing ecommerce site. This is built to learn github collaboration.

---

### Git Workflow Rules (Read Before Coding!)

#### The Golden Rules
1. **NEVER** write code directly on `main` or `staging`.
2. **ALWAYS** make a new branch for every feature you build.
- new branch's named should be what the work is. example: if building something, branch name should be `build/whats-being-build`, if adding feature to something, branch name should be `feature/whats-the-feature`, if solving a bug, branch name should be `bugfix/whats-the-bug-being-fix`.
3. **NEVER** push directly to `staging` without a Pull Request.

---

#### The Daily Step-by-Step Guide

##### Step 1: Get the latest updates
Before you start coding for the day, make sure your computer has latest code. Run these commands in your terminal:
```bash
git checkout staging
git pull origin staging
```
#### Step 2: Make your own workspace (Branch)
Create a new branch named after the thing you are building or adding feature to it or fixing bug:
```bash
# for building something:
git checkout -b build/build-name
# for feature:
git checkout -b feature/feature-name
# for fixing bug:
git checkout -b bugfix/bug-name-fix
```

#### Step 3: Code and Save your work
Do your work in VS Code. When you finish a chunk of work, save it to Git:
```bash
# 1. Stage all your changed files
git add .
# 2. Lock in your changes with a message describing what you did
git commit -m "added the hero section styling"
```

#### Step 4: Send it to GitHub
When your feature is complete and is working on your computer, upload your branch to GitHub:
```bash
git push origin my-feature
```

#### Step 5: Ask for a Review (Pull Request)
1. Open project repository on the GitHub website.
2. Look for the yellow bar at the top and click **"Compare & pull request"**.
3. Choose to merge your branch into **`staging`**.
4. Send message to teammate saying: *"PR is ready for review!"*
5. Once it's checked, we will merge it!