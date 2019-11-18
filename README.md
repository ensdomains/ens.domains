# ens.domains

Landing page for [ens.domains](https://ens.domains)


## Setup

```
git clone https://github.com/ensdomains/ens.domains
cd ens.domains
yarn
yarn develop
```

## Adding logos of integraded Dapps and Wallets

The success of ENS all depends on wallets and dapps to integrate ENS into your product and service.
To show support and recogninition of your hard work, we would love to list your brand in our website.

To enable ENS in your wallets and dapps, there are three ways.

- Resolve ENS names
- Support Reverse Resolution
- Let Users Name Things

Please read [our doc](https://docs.ens.domains/dapp-developer-guide/ens-enabling-your-dapp) for more information.

Once you integrate ENS, please raise pull request with the following steps.

### 1. Add your logo image

The category is either under `apps`, `desktop`, or `mobile`.

We recommend filename to be all lowercase with png file format

eg:
```
src/components/supportedApps
├── apps
├── desktop
├── mobile
│   ├── burnerwallet.png
```

2. Add metadata

Add `filename` of the image file you just as a key and set `link` and `name` data into `src/components/supportedApps/links.json`

eg:
```
  "burnerwallet": {
    "link": "https://xdai.io/",
    "name": "Burner Wallet"
  }
```

3. Make sure it displays correctly.

```
yarn develop
```

Open on http://localhost:8000

![]()

4. Raise PR

Example pull request

https://github.com/ensdomains/ens.domains/pull/29/files

