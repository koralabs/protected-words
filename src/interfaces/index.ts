export interface ProtectedWord {
    word: string;
    algorithms: ('modifier' | 'badword' | 'suggestive' | 'hatespeech' | 'vulnerable')[];
    modType?: ('modifier' | 'suggestive' | 'hatespeech')[];
    canBePositive?: boolean;
    position?: 'exact' | 'any' | 'beginswith';
    exceptions?: string[];
}

export interface Options {
    protected: ProtectedWord[];
}

export enum AvailabilityResponseCode {
    AVAILABLE = 200,
    NOT_AVAILABLE_FOR_LEGAL_REASONS = 451,
    NOT_ACCEPTABLE = 406,
    LOCKED = 423
}

export interface AvailabilityResponse {
    available: boolean;
    handle: string;
    message?: string;
    type?: 'notallowed' | 'invalid';
    link?: string; //`https://${process.env.CARDANOSCAN_DOMAIN}/token/${policyID}.${assetName}`
    reason?: string;
    duration?: number;
    code: AvailabilityResponseCode;
}
