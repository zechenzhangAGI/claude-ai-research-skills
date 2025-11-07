# 🗺️ Roadmap

## Vision

Build the most comprehensive open-source library of AI research skills, enabling AI agents to autonomously conduct experiments from hypothesis to deployment.

**Target**: 70 comprehensive skills by month 6

## Progress Overview

| Metric | Current | Target (6 months) |
|--------|---------|-------------------|
| **Skills** | 7 (high-quality) | 70 |
| **Avg Lines/Skill** | 138 lines | 300+ lines |
| **Gold Standard Skills** | 1 (GRPO: 569 lines) | 20+ |
| **Coverage** | Fine-tuning (strong) | Full Lifecycle |

## Development Phases

### ✅ Phase 1: Training Foundation (COMPLETE - 7 skills)
**Status**: 70% of training lifecycle covered

**Completed Skills**:
- Axolotl - YAML-based fine-tuning
- TRL - Transformer Reinforcement Learning
- LLaMA-Factory - WebUI no-code fine-tuning
- Unsloth - 2x faster QLoRA fine-tuning
- GRPO-RL-Training - Group Relative Policy Optimization
- DeepSpeed - Microsoft's ZeRO optimization
- PyTorch FSDP - Fully Sharded Data Parallel

### 🚧 Phase 2: Complete Training Stack (Weeks 1-2) - 5 Skills
**Priority**: HIGH - Finish what we started

- [ ] **OpenRLHF** - Open-source RLHF implementation
- [ ] **VERL** - VolcEngine RL for LLMs
- [ ] **Flash Attention** - Tri Dao's kernel optimization
- [ ] **bitsandbytes** - 8-bit training/inference
- [ ] **RWKV** - State-space model alternative

### 🎯 Phase 3: Inference & Serving (Weeks 3-4) - 6 Skills
**Priority**: CRITICAL - Enable production deployment

- [ ] **vLLM** - PagedAttention, continuous batching
- [ ] **TensorRT-LLM** - NVIDIA inference optimization
- [ ] **llama.cpp** - CPU/edge inference
- [ ] **SGLang** - Fast structured generation
- [ ] **GPTQ** - Post-training quantization
- [ ] **AWQ** - Activation-aware quantization

### 📊 Phase 4: Evaluation & Data (Weeks 5-6) - 5 Skills
**Priority**: HIGH - Complete research lifecycle

- [ ] **lm-evaluation-harness** - EleutherAI benchmarks
- [ ] **HELM** - Stanford evaluation
- [ ] **AlpacaEval** - Instruction-following eval
- [ ] **Ray Data** - Distributed data processing
- [ ] **HuggingFace Datasets** - Dataset management

### 📈 Phase 5: MLOps (Weeks 7-8) - 4 Skills
**Priority**: MEDIUM-HIGH - Production readiness

- [ ] **Weights & Biases** - Experiment tracking
- [ ] **MLflow** - Open-source MLOps
- [ ] **TensorBoard** - Visualization
- [ ] **HuggingFace Hub** - Model registry

### 🤖 Phase 6: Applications (Weeks 9-12) - 12 Skills
**Priority**: CRITICAL - Enable AI applications

**Agents**:
- [ ] **LangChain** - Most popular agent framework
- [ ] **LlamaIndex** - Data-focused agents
- [ ] **CrewAI** - Multi-agent collaboration
- [ ] **AutoGPT** - Autonomous agents

**RAG**:
- [ ] **Pinecone** - Vector database
- [ ] **ChromaDB** - Open-source vector DB
- [ ] **LlamaIndex RAG** - RAG pipelines
- [ ] **Sentence Transformers** - Embeddings

**Tools**:
- [ ] **DSPy** - Prompt optimization
- [ ] **Instructor** - Structured output
- [ ] **LangSmith** - Observability
- [ ] **Guardrails AI** - Output validation

### 🔬 Phase 7: Specialized (Weeks 13-16) - 8 Skills
**Priority**: MEDIUM - Cutting-edge techniques

- [ ] **LLaVA** - Vision-language models
- [ ] **Whisper** - Speech-to-text
- [ ] **Stable Diffusion** - Image generation
- [ ] **MoE Training** - Mixture of Experts
- [ ] **Model Merging** - mergekit
- [ ] **Long Context** - RoPE extensions
- [ ] **Speculative Decoding**
- [ ] **Distillation**

## Contributing to the Roadmap

Want to help us achieve these goals?

1. **Pick a skill from the roadmap** - Comment on [GitHub Discussions](https://github.com/zechenzhangAGI/claude-ai-research-skills/discussions) to claim it
2. **Follow the [contribution guide](CONTRIBUTING.md)** - Use our template and quality standards
3. **Submit your PR** - We review within 48 hours

## Priority Areas

If you're looking to make the biggest impact, focus on:

1. **Phase 3: Inference & Serving** (CRITICAL) - Production deployment is essential
2. **Phase 6: Applications** (CRITICAL) - Enable real-world AI applications
3. **Phase 2: Complete Training Stack** (HIGH) - Finish what we started

## Philosophy

**Quality over Quantity**: Each skill must provide real value with comprehensive guidance, not just links to docs. We aim for 300+ lines of expert-level content per skill, with real code examples, troubleshooting guides, and production-ready workflows.
