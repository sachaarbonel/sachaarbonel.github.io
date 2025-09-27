---
title: 'When “Thank You for Watching” Comes from Noise'
description: 'Introduces a dataset of Whisper non-speech hallucinations, explains why they happen, and shows BoH filtering with Silero VAD that cuts WER on noise.'
pubDate: 'Sept 27 2025'
---

### The weird bug

I fed Whisper hours of non-speech and it thanked me for watching. The model heard nothing and still closed the show. This dataset targets that bug.

### Related work in one paragraph

Researchers at AGH University of Krakow studied this failure mode and built a Bag of Hallucinations, then they removed loops and filtered those phrases as a post-process. On their benchmarks, word error rate fell from about 104.8–112.0 percent without processing to about 17.1–21.1 percent with delooping plus the BoH filter, and it dropped further to about 6.5–9.4 percent when combined with Silero VAD. They matched phrases with the Aho-Corasick algorithm, and they also probed decoder parameters.

### Where do Whisper’s “thank you for watching”-style hallucinations come from?

**Training-data priors at web scale.**
Whisper was trained on roughly 680,000 hours of multilingual, multitask data collected from the web, so it learned common sign-offs that appear all over online video. When audio is ambiguous, those strong language priors sometimes win, and the model fills gaps with highly probable boilerplate rather than silence. This explanation follows directly from the training recipe and from how sequence-to-sequence decoders behave. ([OpenAI][1])

**Decoder and no-speech gating.**
Whisper has a special `<|nospeech|>` token, and the paper recommends a no-speech probability threshold of 0.6 together with an average log-probability threshold of −1.0 to decide when to skip a segment. If those gates do not trigger, or if you relax them, the decoder keeps going and the language model prior can invent fluent text on noise. The long-form decoding heuristics in the paper explain why tightening these thresholds often helps.

**Non-speech segments and long pauses.**
The AGH study shows that non-speech audio induces a recurring set of strings, and that duration matters, since longer stretches of non-speech increase hallucination rates. Their experiments quantify how sound type and length affect which phrases appear, which is why a fixed list of frequent outputs is so effective as a filter.

**Independent evidence that pauses amplify the issue.**
Separate work on real clinical speech reports more hallucinations when non-vocal time increases, which suggests a general interaction between long pauses and decoder priors, not just a synthetic-noise artifact. ([ACM Digital Library][2])

### Our contribution

The dataset provides a ready list of common non-speech hallucination strings with language tags and counts, so you can evaluate pipelines quickly and filter obvious boilerplate without touching the model. ([Hugging Face][3])

### What’s inside

The Hugging Face viewer shows one `train` split with about 7.89k rows, and the schema is `lang`, `phrase`, and `count`, and the license is MIT, and the page includes an auto-converted Parquet view. You can also skim multilingual “thank you” and “thanks for watching” variants right in the preview. ([Hugging Face][3])

### Limits and ethics

These strings represent model errors rather than reference text, so do not treat them as ground truth, and expect some false positives because people do say “thanks for watching” in real audio, so tune by domain and language, and monitor your thresholds if you rely on no-speech gating. Results can vary by model version and SNR, so test on your own stack.

### Pointers

Paper, “Investigation of Whisper ASR Hallucinations Induced by Non-Speech Audio,” Jan 20, 2025, AGH University of Krakow, with arXiv and BaDAP entries. ([arXiv][4])
Dataset, “sachaarbonel/whisper-hallucinations,” on Hugging Face, with viewer and schema. ([Hugging Face][3])
Background, Whisper training overview and decoding heuristics with the 0.6 and −1.0 thresholds. ([OpenAI][1])

If you want, I can add a short box that explains how to set `no_speech_threshold` and `logprob_threshold`, and I can include an Aho-Corasick snippet you can drop into a production filter.

[1]: https://openai.com/index/whisper/?utm_source=chatgpt.com 'Introducing Whisper'
[2]: https://dl.acm.org/doi/fullHtml/10.1145/3630106.3658996?utm_source=chatgpt.com 'Careless Whisper: Speech-to-Text Hallucination Harms'
[3]: https://huggingface.co/datasets/sachaarbonel/whisper-hallucinations 'sachaarbonel/whisper-hallucinations · Datasets at Hugging Face'
[4]: https://arxiv.org/pdf/2501.11378?utm_source=chatgpt.com 'Investigation of Whisper ASR Hallucinations Induced by ...'
