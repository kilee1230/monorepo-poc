#!/bin/bash

# Local CI Test Script
# This script mimics the GitHub Actions CI workflow for local testing

set -e

echo "🚀 Starting local CI pipeline test..."

echo ""
echo "📦 Installing dependencies..."
npm ci

echo ""
echo "🔍 Running type check..."
npm run typecheck

echo ""
echo "🔧 Running linter..."
npm run lint

echo ""
echo "🏗️ Building all projects..."
npm run build

echo ""
echo "🧪 Running tests with coverage..."
npm run test:coverage

echo ""
echo "✅ All CI steps completed successfully!"
echo ""
echo "📊 Coverage reports available in:"
echo "  - coverage/apps/frontend/"
echo "  - coverage/apps/backend/"
echo "  - coverage/libs/shared-utils/" 