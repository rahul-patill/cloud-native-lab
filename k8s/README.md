# ☸️ Kubernetes Deployment Guide

Quick-reference commands for deploying the hello-world-app.

---

## 📋 1. Create Namespaces (Run once per cluster)

These commands work on **both** Minikube and DOKS.

```powershell
kubectl apply -f overlays/dev/namespace.yaml
kubectl apply -f overlays/prod/namespace.yaml
```

---

## 🖥️ 2. Minikube (Local Testing)

### Deploy

```powershell
# Deploy to dev namespace
kubectl apply -f base/ -n dev

# Deploy to prod namespace
kubectl apply -f base/ -n prod
```

### Access the App

```powershell
# Open dev in your browser
minikube service hello-world-service -n dev

# Open prod in your browser
minikube service hello-world-service -n prod
```

---

## ☁️ 3. DigitalOcean (DOKS) — Manual Deploy

### Switch kubectl to the DOKS Cluster

```powershell
# List all available clusters
kubectl config get-contexts

# Switch to DOKS (replace <context-name> with your DOKS context)
kubectl config use-context <context-name>

# Verify you're connected to the right cluster
kubectl get nodes
```

### Deploy

```powershell
# Deploy to dev namespace
kubectl apply -f base/ -n dev

# Deploy to prod namespace
kubectl apply -f base/ -n prod
```

### Access the App

```powershell
# Get the dev public IP (look for EXTERNAL-IP column)
kubectl get service hello-world-service -n dev

# Get the prod public IP
kubectl get service hello-world-service -n prod

# Then visit http://<EXTERNAL-IP> in your browser
```

### Update a Running Deployment

```powershell
# After pushing new code and CI builds a new image,
# restart the deployment to pull the latest image:
kubectl rollout restart deployment/hello-world-app -n prod
```

### Switch Back to Minikube

```powershell
kubectl config use-context minikube
```

---

## 🤖 4. DigitalOcean (DOKS) — Automated via GitHub Actions

Once the CD pipeline (`.github/workflows/deploy.yml`) is set up:

| What You Do | What Happens Automatically |
|-------------|---------------------------|
| Create a PR | CI builds image → CD deploys to **dev** namespace |
| Merge PR to `main` | CI builds image → CD deploys to **prod** namespace |

### Check Deployment Status

```powershell
# See what's running in dev
kubectl get all -n dev

# See what's running in prod
kubectl get all -n prod
```

> For full details on how the pipeline works, see `agents/DOKS_MIGRATION.md`.

---

## 🧹 5. Delete / Clean Up

```powershell
# Delete app from dev namespace
kubectl delete -f base/ -n dev

# Delete app from prod namespace
kubectl delete -f base/ -n prod

# Delete the entire DOKS cluster (stops all charges)
doctl kubernetes cluster delete hello-world-cluster
```
