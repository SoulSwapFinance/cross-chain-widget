import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { logos } from "../../assets/images/logos";
import { ImageWrapper } from "../ImageWrapper";
import { LightButton } from "../buttons/LightButton";
export const ShareOnTwitter = ({ fromToken, toToken, fromChain, toChain, }) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    const baseTwitterUrl = "https://twitter.com/intent/tweet?text=";
    const prefix = `I just swapped with @squidrouter 💜🤝

`;
    const suffix = `

🔗 https://app.squidrouter.com/`;
    const tweetOptions = [
        {
            text: `Tokens flow like a river,
Squid connects them all,
${fromToken === null || fromToken === void 0 ? void 0 : fromToken.symbol} to ${toToken === null || toToken === void 0 ? void 0 : toToken.symbol},
Interoperability's call.`,
            condition: true,
            generic: true,
        },
        {
            text: `Across chains they travel,
With Squid's help they unite,
${fromToken === null || fromToken === void 0 ? void 0 : fromToken.symbol} to ${toToken === null || toToken === void 0 ? void 0 : toToken.symbol},
A beautiful sight.`,
            condition: true,
            generic: true,
        },
        {
            text: `The beauty of cross-chain,
Squid makes it a breeze,
${fromToken === null || fromToken === void 0 ? void 0 : fromToken.symbol} to ${toToken === null || toToken === void 0 ? void 0 : toToken.symbol},
Token swaps with ease.`,
            condition: true,
            generic: true,
        },
        {
            text: `With Squid as our guide,
Tokens move with grace,
${fromToken === null || fromToken === void 0 ? void 0 : fromToken.symbol} to ${toToken === null || toToken === void 0 ? void 0 : toToken.symbol},
A seamless exchange takes place.`,
            condition: true,
            generic: true,
        },
        {
            text: `Tokens swap with elegance,
Squid's the key,
${fromToken === null || fromToken === void 0 ? void 0 : fromToken.symbol} to ${toToken === null || toToken === void 0 ? void 0 : toToken.symbol},
Efficiency to see.`,
            condition: true,
            generic: true,
        },
        {
            text: `A symphony of tokens,
Squid conducts the trade,
${fromToken === null || fromToken === void 0 ? void 0 : fromToken.symbol} to ${toToken === null || toToken === void 0 ? void 0 : toToken.symbol},
The beauty never fades.`,
            condition: true,
            generic: true,
        },
        {
            text: `Tokens move as one,
Thanks to Squid's interoperability,
${fromToken === null || fromToken === void 0 ? void 0 : fromToken.symbol} to ${toToken === null || toToken === void 0 ? void 0 : toToken.symbol},
A sight to see.`,
            condition: true,
            generic: true,
        },
        {
            text: `Tokens flow like a song,
Squid's the composer,
${fromToken === null || fromToken === void 0 ? void 0 : fromToken.symbol} to ${toToken === null || toToken === void 0 ? void 0 : toToken.symbol},
A symphony over and over.`,
            condition: true,
            generic: true,
        },
        {
            text: `Tokens move with ease,
Squid connects them all,
${fromToken === null || fromToken === void 0 ? void 0 : fromToken.symbol} to ${toToken === null || toToken === void 0 ? void 0 : toToken.symbol},
Liquidity standing tall.`,
            condition: true,
            generic: true,
        },
        {
            text: `Tokens flow like a stream,
Squid smooths the way,
${fromToken === null || fromToken === void 0 ? void 0 : fromToken.symbol} to ${toToken === null || toToken === void 0 ? void 0 : toToken.symbol},
Interoperability at play.`,
            condition: true,
            generic: true,
        },
        {
            text: `With Squid's help,
Tokens reach new heights,
${fromToken === null || fromToken === void 0 ? void 0 : fromToken.symbol} to ${toToken === null || toToken === void 0 ? void 0 : toToken.symbol},
Expanding ecosystems in sight.`,
            condition: true,
            generic: true,
        },
        {
            text: `Security and efficiency,
Squid's swaps provide,
${fromToken === null || fromToken === void 0 ? void 0 : fromToken.symbol} to ${toToken === null || toToken === void 0 ? void 0 : toToken.symbol},
Cross-chain liquidity thrives.`,
            condition: true,
            generic: true,
        },
        {
            text: `Tokens move like a wave,
Squid guides the flow,
${fromToken === null || fromToken === void 0 ? void 0 : fromToken.symbol} to ${toToken === null || toToken === void 0 ? void 0 : toToken.symbol},
A pair to know.`,
            condition: true,
            generic: true,
        },
        {
            text: `A path to liquidity,
Squid's the key,
${fromToken === null || fromToken === void 0 ? void 0 : fromToken.symbol} to ${toToken === null || toToken === void 0 ? void 0 : toToken.symbol},
Access unlocked, seamlessly.`,
            condition: true,
            generic: true,
        },
        {
            text: `Tokens flow like a river,
Squid is the guide,
${fromToken === null || fromToken === void 0 ? void 0 : fromToken.symbol} to ${toToken === null || toToken === void 0 ? void 0 : toToken.symbol},
Interoperability's tide.`,
            condition: true,
            generic: true,
        },
        {
            text: `Tokens move as one,
Squid connects the link,
${fromToken === null || fromToken === void 0 ? void 0 : fromToken.symbol} to ${toToken === null || toToken === void 0 ? void 0 : toToken.symbol},
A swap in sync.`,
            condition: true,
            generic: true,
        },
        {
            text: `Tokens flow like a song,
Squid creates the melody,
${fromToken === null || fromToken === void 0 ? void 0 : fromToken.symbol} to ${toToken === null || toToken === void 0 ? void 0 : toToken.symbol},
Cross-chain harmony.`,
            condition: true,
            generic: true,
        },
        {
            text: `Tokens flow like a river,
Squid's swaps are the guide,
A path to a brighter future,
For all tokens to abide.`,
            condition: true,
            generic: true,
        },
        {
            text: `Tokens move with ease,
Squid's swaps are the key,
A sight for all to see,
For tokens to be free.`,
            condition: true,
            generic: true,
        },
        {
            text: `Tokens move as one,
Squid enables the unity,
For expanding ecosystems,
To become a community.`,
            condition: true,
            generic: true,
        },
        {
            text: `The dance of the tokens,
Squid makes it seamless,
${fromToken === null || fromToken === void 0 ? void 0 : fromToken.symbol} to ${toToken === null || toToken === void 0 ? void 0 : toToken.symbol},
Wrapped tokens are needless`,
            condition: true,
            generic: true,
        },
        {
            text: `The harmony of tokens,
Squid makes it possible,
${fromToken === null || fromToken === void 0 ? void 0 : fromToken.symbol} to ${toToken === null || toToken === void 0 ? void 0 : toToken.symbol},
The path is unstoppable`,
            condition: true,
            generic: true,
        },
        {
            text: `Tokens move like a wave,
Efficiency's tide,
${fromToken === null || fromToken === void 0 ? void 0 : fromToken.symbol} to ${toToken === null || toToken === void 0 ? void 0 : toToken.symbol},
United side by side.`,
            condition: true,
            generic: true,
        },
        {
            text: `Tokens traded, blockchains crossed
Values shifting, fortunes tossed
A digital dance, ever-changing
${toToken === null || toToken === void 0 ? void 0 : toToken.symbol} to ${fromToken === null || fromToken === void 0 ? void 0 : fromToken.symbol}, token swapping.`,
            condition: true,
            generic: true,
        },
        {
            text: `Squid's software, a mission so grand
${toToken === null || toToken === void 0 ? void 0 : toToken.symbol} and ${fromToken === null || fromToken === void 0 ? void 0 : fromToken.symbol}, hand in hand
Interoperability, it's the key
To a decentralized economy`,
            condition: true,
            generic: true,
        },
        {
            text: `Squid's swaps, blockchains blend
${toToken === null || toToken === void 0 ? void 0 : toToken.symbol} and ${fromToken === null || fromToken === void 0 ? void 0 : fromToken.symbol}, to new heights ascend
Interoperability, it’s the key
To less fragmented liquidity`,
            condition: true,
            generic: true,
        },
        {
            text: `${fromToken === null || fromToken === void 0 ? void 0 : fromToken.symbol} to ${toToken === null || toToken === void 0 ? void 0 : toToken.symbol}, a swap so smooth
Squid made it happen, no need to prove
My assets now, in a new place
I'm Tweeting this poem with a smile on my face`,
            condition: true,
            generic: true,
        },
        {
            text: `Squid's cross-chain swap, a sight to see
${toToken === null || toToken === void 0 ? void 0 : toToken.symbol} to ${fromToken === null || fromToken === void 0 ? void 0 : fromToken.symbol}, in harmony
A new protocol, for any to any
My assets can now be finally free.`,
            condition: true,
            generic: true,
        },
        {
            text: `With Squid, I made the shift
From ${fromToken === null || fromToken === void 0 ? void 0 : fromToken.symbol} to ${toToken === null || toToken === void 0 ? void 0 : toToken.symbol}, so fine
Efficiency, it was a gift
And now, my chains align`,
            condition: true,
            generic: true,
        },
        {
            text: `Squid was my cross-chain friend
From ${fromToken === null || fromToken === void 0 ? void 0 : fromToken.symbol} to ${toToken === null || toToken === void 0 ? void 0 : toToken.symbol}, with ease
A seamless exchange, it did tend
And now, I have what I need.`,
            condition: true,
            generic: true,
        },
        {
            text: `${fromToken === null || fromToken === void 0 ? void 0 : fromToken.symbol} to ${toToken === null || toToken === void 0 ? void 0 : toToken.symbol}, a breeze
Squid, the cross-chain router
Effortless, quick, and easy
Making the swap, no doubt ser`,
            condition: true,
            generic: true,
        },
        {
            text: `${fromToken === null || fromToken === void 0 ? void 0 : fromToken.symbol}, ${toToken === null || toToken === void 0 ? void 0 : toToken.symbol}, both fine
Squid, the link between them
Routing with ease in line
Making the swap seamless again.`,
            condition: true,
            generic: true,
        },
        {
            text: `Squid, the cross-chain router
From ${fromToken === null || fromToken === void 0 ? void 0 : fromToken.symbol} to ${toToken === null || toToken === void 0 ? void 0 : toToken.symbol}, it leads
A smooth and seamless swap, it brings
And with it, all my needs`,
            condition: true,
            generic: true,
        },
        {
            text: `With Squid, our swaps are fast
From ${fromToken === null || fromToken === void 0 ? void 0 : fromToken.symbol} to ${toToken === null || toToken === void 0 ? void 0 : toToken.symbol} with ease
A smooth journey that will last
And give us what we please`,
            condition: true,
            generic: true,
        },
        {
            text: `Squid, a cross-chain guide
From ${fromToken === null || fromToken === void 0 ? void 0 : fromToken.symbol} to ${toToken === null || toToken === void 0 ? void 0 : toToken.symbol}, we go
Efficiency on our side
How all our swaps should go`,
            condition: true,
            generic: true,
        },
        {
            text: `Tokens travel with delight,
Squid's the guiding light,
${fromToken === null || fromToken === void 0 ? void 0 : fromToken.symbol} to ${toToken === null || toToken === void 0 ? void 0 : toToken.symbol},
A cross-chain exchange so bright.`,
            condition: true,
            generic: true,
        },
        {
            text: `I just swapped with Squid, the router,
And it was a delight, like no other,
${fromToken === null || fromToken === void 0 ? void 0 : fromToken.symbol} to ${toToken === null || toToken === void 0 ? void 0 : toToken.symbol}, no need to ponder,
A seamless exchange, in a cross-chain wonder.`,
            condition: true,
            generic: true,
        },
        {
            text: `A path across chains, assets do tread,
Squid as their guide, to ${toChain === null || toChain === void 0 ? void 0 : toChain.networkName} they're led.
Interoperability, a sight to behold,
A swap to ${toChain === null || toChain === void 0 ? void 0 : toChain.networkName}, a story to be told.`,
            condition: true,
            generic: true,
        },
        {
            text: `Like a bird in flight, assets soar,
With Squid as their guide, to ${toChain === null || toChain === void 0 ? void 0 : toChain.networkName} they pour.
Interoperability, a sight to behold,
A swap to ${toChain === null || toChain === void 0 ? void 0 : toChain.networkName}, a story to be told.`,
            condition: true,
            generic: true,
        },
        {
            text: `A seamless flow of assets across chain,
Squid as the guide, to ${toChain === null || toChain === void 0 ? void 0 : toChain.networkName} they gain.
Interoperability, a beauty to behold,
A swap to ${toChain === null || toChain === void 0 ? void 0 : toChain.networkName}, a story to be told.`,
            condition: true,
            generic: true,
        },
        {
            text: `A dance of assets, across chains they twirl,
Squid as their partner, their journey to unfurl.
To ${toChain === null || toChain === void 0 ? void 0 : toChain.networkName} they go, a swap so grand,
With interoperable assets at hand.`,
            condition: true,
            generic: true,
        },
        {
            text: `A journey awaits, to ${toChain === null || toChain === void 0 ? void 0 : toChain.networkName} they'll go,
With Squid as the guide, the way they'll know.
A world of possibilities, they'll find and tw-grow,
Token swaps made easy, as the winds do blow.`,
            condition: true,
            generic: true,
        },
        {
            text: `To ${toChain === null || toChain === void 0 ? void 0 : toChain.networkName} they travel, with a new dawn,
With Squid as the guide, their journey is drawn.
A world of adventure, tokens are reborn,
Seamless swaps, where all chains are as one.`,
            condition: true,
            generic: true,
        },
        {
            text: `From near or far, tokens find their way,
To ${toChain === null || toChain === void 0 ? void 0 : toChain.networkName}, where a brighter future lay.
With Squid as the guide, they'll find a new day,
Of seamless swaps, without any delay.`,
            condition: true,
            generic: true,
        },
        {
            text: `An adventure awaits, tokens take the reins,
To ${toChain === null || toChain === void 0 ? void 0 : toChain.networkName}, where a new world awaits.
With Squid as the guide, their journey sustains,
Seamless swaps, where tokens can cross chains.`,
            condition: true,
            generic: true,
        },
        {
            text: `Like a flower in bloom, tokens burst with life,
To ${toChain === null || toChain === void 0 ? void 0 : toChain.networkName}, where they'll flourish,
With Squid as the guide, their journey is without woe,
In a seamless swap, where liquidity can tw-grow.`,
            condition: true,
            generic: true,
        },
        {
            text: `Tokens sing a song, in a chorus so sweet,
To ${toChain === null || toChain === void 0 ? void 0 : toChain.networkName}, where their rhythm completes,
With Squid as the guide, their journey is harmonious,
In a seamless swap, where tokens join the chorus.`,
            condition: true,
            generic: true,
        },
        {
            text: `From ${fromChain === null || fromChain === void 0 ? void 0 : fromChain.networkName}, assets take flight,
Squid as their guide, into the night.
Cross-chain swaps, a sight to behold,
${fromChain === null || fromChain === void 0 ? void 0 : fromChain.networkName} to ${toChain === null || toChain === void 0 ? void 0 : toChain.networkName}, a story to be told.`,
            condition: true,
            generic: true,
        },
        {
            text: `From ${fromChain === null || fromChain === void 0 ? void 0 : fromChain.networkName}, assets take flight,
Squid as their guide, into the night.
Cross-chain swaps, a sight to behold,
${fromChain === null || fromChain === void 0 ? void 0 : fromChain.networkName} to ${toChain === null || toChain === void 0 ? void 0 : toChain.networkName}, a story to be told.`,
            condition: true,
            generic: true,
        },
        {
            text: `From ${fromChain === null || fromChain === void 0 ? void 0 : fromChain.networkName} to ${toChain === null || toChain === void 0 ? void 0 : toChain.networkName}, what a sight,
With seamless ease, swapping tokens in flight.
No more wrapped assets, no more delay,
Just instant transfers in a seamless way.`,
            condition: true,
            generic: true,
        },
        {
            text: `${fromChain === null || fromChain === void 0 ? void 0 : fromChain.networkName} and ${toChain === null || toChain === void 0 ? void 0 : toChain.networkName}, they dance and sway,
With Squid leading the way, in a seamless play.
No more wrapped assets, no need to delay,
A future of crossing chains makes a brighter day.`,
            condition: true,
            generic: true,
        },
        {
            text: `${fromChain === null || fromChain === void 0 ? void 0 : fromChain.networkName} and ${toChain === null || toChain === void 0 ? void 0 : toChain.networkName}, now in harmony,
Squid the conductor, a cross-chain symphony.
No more wrapped assets, liquidity synergy,
Cross-chain swaps made simple, a new reality.`,
            condition: true,
            generic: true,
        },
        {
            text: `From ${fromChain === null || fromChain === void 0 ? void 0 : fromChain.networkName} to ${toChain === null || toChain === void 0 ? void 0 : toChain.networkName}, they cross the divide,
Tokens swap with ease, no longer forced to hide.
Squid leads the way, the cross-chain guide,
Of seamless swaps, a future that can't be denied.`,
            condition: true,
            generic: true,
        },
        {
            text: `${fromChain === null || fromChain === void 0 ? void 0 : fromChain.networkName} and ${toChain === null || toChain === void 0 ? void 0 : toChain.networkName}, a cross-chain collaboration,
Squid leading the way, without hesitation.
No more wrapped assets, cross-chain swap sensation,
Of seamless transfers, with no limitation.`,
            condition: true,
            generic: true,
        },
        {
            text: `Like a starry night, tokens journey on,
From ${fromChain === null || fromChain === void 0 ? void 0 : fromChain.networkName} to ${toChain === null || toChain === void 0 ? void 0 : toChain.networkName}, they are gone.
With Squid as the guide, they are never alone,
Through a seamless swap, they've found their new home`,
            condition: true,
            generic: true,
        },
        {
            text: `Like a bird in flight, tokens soar,
From ${fromChain === null || fromChain === void 0 ? void 0 : fromChain.networkName} to ${toChain === null || toChain === void 0 ? void 0 : toChain.networkName}, they explore.
With Squid as the guide, they find a new shore,
Of seamless swaps, who could ask for more?`,
            condition: true,
            generic: true,
        },
        {
            text: `Like the tides of the sea, tokens flow,
From ${fromChain === null || fromChain === void 0 ? void 0 : fromChain.networkName} to ${toChain === null || toChain === void 0 ? void 0 : toChain.networkName}, to and fro.
With Squid as their guide, they smoothly go,
On a journey to a future that tw-grows.`,
            condition: true,
            generic: true,
        },
        {
            text: `Like a snowflake in a blizzard,
My tokens reach their place,
To Avalanche network they go,
Swapping at a great pace.`,
            condition: (_a = toChain === null || toChain === void 0 ? void 0 : toChain.networkName.toLowerCase().includes("avalanche")) !== null && _a !== void 0 ? _a : false,
        },
        {
            text: `To Avalanche, my tokens flow.
Moving at speed like a cascade of snow,
Squid leads the way, through the blizzard they cruise,
In a seamless swap, where they'll find a new use.`,
            condition: (_b = toChain === null || toChain === void 0 ? void 0 : toChain.networkName.toLowerCase().includes("avalanche")) !== null && _b !== void 0 ? _b : false,
        },
        {
            text: `Tokens rush down, like a winter's storm,
To Avalanche's peak, where they are transformed.
Squid provides the path, with guidance so true,
In a seamless swap, tokens shine anew.`,
            condition: (_c = toChain === null || toChain === void 0 ? void 0 : toChain.networkName.toLowerCase().includes("avalanche")) !== null && _c !== void 0 ? _c : false,
        },
        {
            text: `Tokens swirl like snowflakes, in a winter's play,
To Avalanche's realm, where they come to stay.
In a seamless swap, without delay.
Squid is the guide, who shows them the way.`,
            condition: (_d = toChain === null || toChain === void 0 ? void 0 : toChain.networkName.toLowerCase().includes("avalanche")) !== null && _d !== void 0 ? _d : false,
        },
        {
            text: `Tokens rush down, like a winter's storm,
To Avalanche's peak, where they are transformed.
Squid provides the path, with guidance so true,
Through the swirling snow, to a world brand new.`,
            condition: (_e = toChain === null || toChain === void 0 ? void 0 : toChain.networkName.toLowerCase().includes("avalanche")) !== null && _e !== void 0 ? _e : false,
        },
        {
            text: `Tokens fly fast, like comets through the space,
To Moonbeam's station, where they find their place.
Squid the link, connecting stars and moons,
Enabling seamless swaps, like a beautiful tune.`,
            condition: (_f = toChain === null || toChain === void 0 ? void 0 : toChain.networkName.toLowerCase().includes("moonbeam")) !== null && _f !== void 0 ? _f : false,
        },
        {
            text: `Tokens journey, like explorers in a quest,
To Moonbeam's galaxy, where they find the best.
Squid the guide, leading through the vast expanse,
Bringing tokens to their next cosmic dance.`,
            condition: (_g = toChain === null || toChain === void 0 ? void 0 : toChain.networkName.toLowerCase().includes("moonbeam")) !== null && _g !== void 0 ? _g : false,
        },
        {
            text: `Tokens fly, like UFO's in the air,
To a new realm, where liquidity is shared,
Squid the messenger, transmitting tokens with care,
Over to Moonbeam, Squid takes them there.`,
            condition: (_h = toChain === null || toChain === void 0 ? void 0 : toChain.networkName.toLowerCase().includes("moonbeam")) !== null && _h !== void 0 ? _h : false,
        },
        {
            text: `Tokens journey, to Polygon they go,
Where scalability makes their path aglow,
From one chain to another, with ease they'll roam,
Through Squid's guidance, they'll find their new home.`,
            condition: (_j = toChain === null || toChain === void 0 ? void 0 : toChain.networkName.toLowerCase().includes("polygon")) !== null && _j !== void 0 ? _j : false,
        },
        {
            text: `Tokens take a leap, to lands unknown,
With Squid as guide, they're never alone.
To Celo they go, a mission in sight,
To invest in good, and bring change to light.`,
            condition: (_k = toChain === null || toChain === void 0 ? void 0 : toChain.networkName.toLowerCase().includes("celo")) !== null && _k !== void 0 ? _k : false,
        },
        {
            text: `Tokens on a quest, to make a change,
With Squid as their guide, their path is arranged.
To Celo they flock, to do what's right,
For projects that heal, and make the world bright.`,
            condition: (_l = toChain === null || toChain === void 0 ? void 0 : toChain.networkName.toLowerCase().includes("celo")) !== null && _l !== void 0 ? _l : false,
        },
    ];
    const filteredTweets = tweetOptions.filter((t) => t.condition);
    const randomTweet = filteredTweets[Math.floor(Math.random() * filteredTweets.length)];
    const tweetUrl = `${baseTwitterUrl}${encodeURIComponent(prefix + randomTweet.text + suffix)}`;
    return (_jsx("a", Object.assign({ target: "_blank", className: "tw-flex tw-flex-row tw-gap-1 tw-text-center", rel: "noreferrer", href: tweetUrl }, { children: _jsx(LightButton, Object.assign({ style: { minHeight: "28px" }, className: "tw-w-auto tw-px-3 tw-text-base tw-font-medium", size: "xs", light: "100" }, { children: _jsxs("span", Object.assign({ className: "tw-flex tw-flex-row tw-items-center tw-gap-1" }, { children: [_jsx("span", { children: "Share on Twitter" }), _jsx(ImageWrapper, { className: "tw-h-4 tw-w-4", src: logos.squidHeart })] })) })) })));
};
//# sourceMappingURL=ShareOnTwitter.js.map