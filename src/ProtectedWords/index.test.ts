import { ProtectedWords } from '.';

describe('ProtectedWords tests', () => {
    // setup badword lists... Sorry Mom.
    const smallList = [
        'shittum', // good
        'ea.tmy5_hit', // bad
        's.h.i.t', // bad
        'punchbabies', //bad
        'i.love.life', // good
        'adastaker', // twitter
        'Xar', // private
        'blade', // SPO
        'AdAhQ', // SPO
        'lickmycooch', // bad
        'peckerhead', // bad
        'myahole', // bad
        'ipedophile', //bad
        'love2lickbabies', // bad
        'ilovebabies', // good
        'power2africa', // good
        'pussy1', // bad
        '1pussy', // bad
        'pussyx', // bad
        'xpussy', // bad
        'n1gg3r', // bad
        'pu55y', // bad
        'tinypreteenpp', // bad
        'tinypreteen', // questionable, but passes
        'goodtoeat', // good
        'organigram',
        'hail.hitler',
        'heil-hitler',
        'he1lh1tler',
        'heil0hitler',
        'kuklux-klan',
        'ku-kluxklan',
        'jewnazi',
        'heilnazi',
        'heilnazihitler',
        'compassionate',
        'rambutan',
        'passionate',
        'associate',
        'teentitans',
        'peanutbutter',
        'childhood',
        'deathstranding',
        'japan'
    ];

    describe('checkAvailability tests', () => {
        it('Should do stuff', async () => {
            const results = await Promise.all(smallList.map((w) => ProtectedWords.checkAvailability(w)));
            expect(JSON.stringify(results)).toEqual([
                {
                    available: true,
                    handle: 'shittum',
                    duration: 212
                },
                {
                    available: false,
                    handle: 'ea.tmy5_hit',
                    type: 'notallowed',
                    reason: "In string match found for 'shit'",
                    duration: 328
                },
                {
                    available: false,
                    handle: 's.h.i.t',
                    type: 'notallowed',
                    reason: "Protected word match (with stripped characters) on 'shit'",
                    duration: 220
                },
                {
                    available: false,
                    handle: 'punchbabies',
                    type: 'notallowed',
                    reason: 'Hatespeech match found for baby,punch',
                    duration: 118
                },
                {
                    available: true,
                    handle: 'i.love.life',
                    duration: 232
                },
                {
                    available: true,
                    handle: 'adastaker',
                    duration: 135
                },
                {
                    available: true,
                    handle: 'xar',
                    duration: 128
                },
                {
                    available: true,
                    handle: 'blade',
                    duration: 146
                },
                {
                    available: true,
                    handle: 'adahq',
                    duration: 160
                },
                {
                    available: false,
                    handle: 'lickmycooch',
                    type: 'notallowed',
                    reason: 'Suggestive language match found for cooch,lick',
                    duration: 165
                },
                {
                    available: false,
                    handle: 'peckerhead',
                    type: 'notallowed',
                    reason: "In string match found for 'pecker'",
                    duration: 127
                },
                {
                    available: false,
                    handle: 'myahole',
                    type: 'notallowed',
                    reason: "Protected word match on 'ahole,my'",
                    duration: 11
                },
                {
                    available: false,
                    handle: 'ipedophile',
                    type: 'notallowed',
                    reason: "In string match found for 'pedophil'",
                    duration: 130
                },
                {
                    available: false,
                    handle: 'love2lickbabies',
                    type: 'notallowed',
                    reason: 'Suggestive language match found for baby,lick',
                    duration: 184
                },
                {
                    available: true,
                    handle: 'ilovebabies',
                    duration: 166
                },
                {
                    available: true,
                    handle: 'power2africa',
                    duration: 184
                },
                {
                    available: false,
                    handle: 'pussy1',
                    type: 'notallowed',
                    reason: "Number trim match on 'pussy'",
                    duration: 90
                },
                {
                    available: false,
                    handle: '1pussy',
                    type: 'notallowed',
                    reason: "Number trim match on 'pussy'",
                    duration: 80
                },
                {
                    available: false,
                    handle: 'pussyx',
                    type: 'notallowed',
                    reason: "Number and 'x' trim match on 'pussy'",
                    duration: 44
                },
                {
                    available: false,
                    handle: 'xpussy',
                    type: 'notallowed',
                    reason: "Number and 'x' trim match on 'pussy'",
                    duration: 40
                },
                {
                    available: false,
                    handle: 'n1gg3r',
                    type: 'notallowed',
                    reason: "Number replacement match on 'nigger'",
                    duration: 12
                },
                {
                    available: false,
                    handle: 'pu55y',
                    type: 'notallowed',
                    reason: "Number replacement match on 'pussy'",
                    duration: 13
                },
                {
                    available: false,
                    handle: 'tinypreteenpp',
                    type: 'notallowed',
                    reason: 'Suggestive language match found for preteen,tiny,pp',
                    duration: 129
                },
                {
                    available: true,
                    handle: 'tinypreteen',
                    duration: 160
                },
                {
                    available: true,
                    handle: 'goodtoeat',
                    duration: 184
                },
                {
                    available: false,
                    handle: 'organigram',
                    type: 'notallowed',
                    reason: 'Suggestive language match found for organ,ram',
                    duration: 195
                },
                {
                    available: false,
                    handle: 'hail.hitler',
                    type: 'notallowed',
                    reason: "Protected word match on 'hitler'",
                    duration: 77
                },
                {
                    available: false,
                    handle: 'heil-hitler',
                    type: 'notallowed',
                    reason: "Protected word match on 'hitler'",
                    duration: 75
                },
                {
                    available: false,
                    handle: 'he1lh1tler',
                    type: 'notallowed',
                    reason: "Number replacement match on 'heilhitler'",
                    duration: 21
                },
                {
                    available: false,
                    handle: 'heil0hitler',
                    type: 'notallowed',
                    reason: "Split on numbers match for 'hitler'",
                    duration: 109
                },
                {
                    available: false,
                    handle: 'kuklux-klan',
                    type: 'notallowed',
                    reason: "Protected word match on 'klan'",
                    duration: 57
                },
                {
                    available: false,
                    handle: 'ku-kluxklan',
                    type: 'notallowed',
                    reason: "Protected word match on 'kluxklan'",
                    duration: 53
                },
                {
                    available: false,
                    handle: 'jewnazi',
                    type: 'notallowed',
                    reason: 'Hatespeech match found for jew,nazi',
                    duration: 139
                },
                {
                    available: false,
                    handle: 'heilnazi',
                    type: 'notallowed',
                    reason: 'Hatespeech match found for nazi,heil',
                    duration: 155
                },
                {
                    available: false,
                    handle: 'heilnazihitler',
                    type: 'notallowed',
                    reason: 'Hatespeech match found for hitler,heil',
                    duration: 149
                },
                {
                    available: false,
                    handle: 'compassionate',
                    type: 'notallowed',
                    reason: 'Suggestive language match found for ass,ate',
                    duration: 158
                },
                {
                    available: false,
                    handle: 'rambutan',
                    type: 'notallowed',
                    reason: 'Suggestive language match found for but,ram',
                    duration: 199
                },
                {
                    available: false,
                    handle: 'passionate',
                    type: 'notallowed',
                    reason: 'Suggestive language match found for ass,ate',
                    duration: 143
                },
                {
                    available: false,
                    handle: 'associate',
                    type: 'notallowed',
                    reason: 'Suggestive language match found for ass,ate',
                    duration: 116
                },
                {
                    available: false,
                    handle: 'teentitans',
                    type: 'notallowed',
                    reason: 'Suggestive language match found for teen,tit',
                    duration: 124
                },
                {
                    available: false,
                    handle: 'peanutbutter',
                    type: 'notallowed',
                    reason: 'Suggestive language match found for but,nut',
                    duration: 129
                },
                {
                    available: false,
                    handle: 'childhood',
                    type: 'notallowed',
                    reason: 'Suggestive language match found for child,hood',
                    duration: 147
                },
                {
                    available: false,
                    handle: 'deathstranding',
                    type: 'notallowed',
                    reason: 'Hatespeech match found for trans,death',
                    duration: 108
                },
                {
                    available: false,
                    handle: 'japan',
                    type: 'notallowed',
                    reason: "Protected word match on 'jap,an'",
                    duration: 1
                }
            ]);
        });
    });
});
