# ☸️ Kubernetes Deployment Guide

## 🚀 How to Deploy

### 1. Create the Namespaces (Run once)
```powershell
kubectl apply -f overlays/dev/namespace.yaml
kubectl apply -f overlays/prod/namespace.yaml
```

### 2. Deploy to Development
```powershell
kubectl apply -f base/ -n dev
```

### 3. Deploy to Production
```powershell
kubectl apply -f base/ -n prod
```

## 🔍 How to Access (Minikube)

### View Dev:
```powershell
minikube service hello-world-service -n dev
```

### View Prod:
```powershell
minikube service hello-world-service -n prod
```

## 🧹 How to Delete
```powershell
kubectl delete -f base/ -n dev
```
