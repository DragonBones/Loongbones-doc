# LoongScales — Product Overview

> LoongScales is a **layer-based image editor** that runs entirely in the browser. Its experience is close to Photoshop / Photopea, and it deeply integrates **AI image generation / background removal / image splitting** with **DragonBones material sync**.
> This documentation is for designers and animators. It walks you from "first contact" to "proficient", so you can get the most out of the tool.

## What is LoongScales

LoongScales is a **purely web-based 2D layered image editor**. You don't install anything — just open it in a browser and start; your work is saved locally automatically, so closing the tab won't lose it.

Like Photoshop, it can paint, color-grade, manage layers and apply effects; on top of that it adds three kinds of "AI superpowers":

- **AI Image Generation**: describe what you want in a sentence and generate an image directly (text-to-image), or transform an existing layer (image-to-image).
- **AI Background Removal / Image Splitting**: one click to remove a background, or split a combined sprite sheet into multiple independent layers.

## Where it sits in the DragonBones pipeline

| Tool | Role | Relationship with LoongScales |
|---|---|---|
| **DragonBones** | 2D skeletal animation platform (a competitor to Spine) | Binds bones and creates animations |
| **LoongScales** | Original-art / material retouching editor | Paints original art, splits layers, reskins, runs AI generation |

A DragonBones character is usually assembled from many "material images" (body, arm, hair…). Each material maps to **one raster layer** in LoongScales. LoongScales and DragonBones can **sync bidirectionally**:

- Pull materials **from** DragonBones **into** LoongScales → precise drawing / AI retouching;
- Push your work **from** LoongScales **back** to DragonBones → it becomes animation material immediately.

This connects the whole 2D animation line — **original design → layer splitting → reskin → skeletal animation** — inside one tool chain, and **every step can be AI-assisted**.

## Capability highlights

- Real layer system: raster, text, vector, adjustment, fill, group
- 27 layer blend modes, 16 adjustments, 6 filters, 15 layer effects (all non-destructive)
- Full painting toolset: brush, eraser, airbrush, smudge, clone stamp, dodge, burn…
- Selections, layer masks, clipping masks, symmetrical drawing, gradients, shapes, pen paths
- Import / export **PSD / PSB** (exchange layered files with Photoshop)
- Built-in **AI assistant** and **DragonBones material sync**

## How to enter LoongScales

- **Online version**: open `loongscales.com` in any browser — no install, no login required for a trial.
- **Embedded version**: LoongScales exists as an embeddable component; host products such as DragonBones embed it directly inside their UI, and you enter it from the host's entry point.

<figure style="text-align:center">
  <img src="/loongscales/ui/online-start.png" alt="LoongScales online start screen" width="80%">
  <figcaption>Initial screen of the online version, showing that it runs in the browser with no install.</figcaption>
</figure>
