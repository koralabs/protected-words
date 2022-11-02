# Cardano Wallets

Library for protected words

## Installation

Using npm:

```javascript
npm install @koralabs/protected-words
```

## Usage:

```javascript
const result = await ProtectedWords.checkAvailability(handleName);
if (!result.available) {
    res.status(result.code).send({
        message:
            result.code === AvailabilityResponseCode.NOT_AVAILABLE_FOR_LEGAL_REASONS ? result.reason : result.message
    });
    return;
}
```

#
