# NAVH-RawlBolt

## Project Description

- This project is built on top of MetaMask SDK, deployed to Linea Goerli Testnet through Infura.
- It is a Proof of Concept (POC) to streamline the consruction workflow as following.
  - The on-site photos sent by site personnel to Telegram Channel or Bot, will be forwarded to RawlBolt dapp.
  - Forwarded photos and texts will be integrated into report (WIP) and get minted as NFT.
  - Collected NFTs can be used as a proof of workdone.
  - Smart contract get trigerred to release payment if sufficient NFTs get collected.

## Getting Started

- Create your own Telegram bot or use the demo bot RawlBolt (t.me/rawlbolt_bot).
- Login to [RawlBolt](https://rawlbolt.xyz) dapp using your Metamask account.
- The photo sent via Telegram Chat will be forwarded to RawlBolt dapp, and can then be minted.

### Run Locally

- Check `.env.sample` and configure `.env` at local.
- Go to [web](./apps/web/) folder and run frontend React loaclly.

```bash
cd ./apps/web
npm run dev
```

## Bounty Submission- Mobile Fun with MetaMask SDK

The usage of MetaMask SDK in this project:

- to detect the chain user connected
- notify user to switch to default network i.e. Linea Goeli testnet in this dapp
