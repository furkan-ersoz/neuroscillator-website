const isProduction = process.env.NODE_ENV === "production";
const basePath = "/neuroscillator-website";

export const withBasePath = (path: string) =>
    isProduction ? `${basePath}${path}` : path;

const config = {
    brandName: "Computational Instruments Lab",
    productName: "Neuroscillator",
    title: "Neuroscillator — AI-Assisted Synthesizer Sound Matching",
    description:
        "Turn target sounds into editable synthesizer patches with Neuroscillator by Computational Instruments Lab.",
    privateDemoUrl: "FORM_URL_HERE",
    demoVideoId: "YOUTUBE_VIDEO_ID",
    companyDescription:
        "Computational Instruments Lab develops intelligent digital instruments for music creation, sound design, and creative exploration.",
    navigation: [
        { label: "Demo", href: "#demo" },
        { label: "How It Works", href: "#how-it-works" },
        { label: "Benefits", href: "#benefits" },
        { label: "FAQ", href: "#faq" },
        { label: "Join Demo", href: "#signup" },
    ],
    hero: {
        headline: "Turn sounds into editable synth patches.",
        supportingText:
            "Neuroscillator analyzes a target audio sample and automatically estimates synthesizer parameters, giving musicians an editable starting point for sound design.",
        primaryCta: "Join the Private Demo",
        secondaryCta: "Watch Demo",
    },
    productExplanation:
        "Neuroscillator transforms a reference sound into editable synthesizer parameters instead of returning only generated audio, so sound designers can refine the result with direct control.",
    howItWorks: [
        {
            title: "Import a target sound",
            description: "Load a reference sample or recording you want to study.",
        },
        {
            title: "Analyze its sonic characteristics",
            description:
                "Neuroscillator estimates the patch traits that define the source sound.",
        },
        {
            title: "Generate an editable synthesizer starting point",
            description:
                "Review the parameters, adjust them, and continue shaping the patch by ear.",
        },
    ],
    benefits: [
        "Editable synthesizer parameters",
        "Faster sound design workflow",
        "Creative starting points",
        "Offline processing",
        "Musician-controlled refinement",
    ],
    faq: [
        {
            question: "What does Neuroscillator do?",
            answer:
                "Neuroscillator analyzes a target audio sample and estimates synthesizer parameters that can be edited and refined as a starting point for sound design.",
        },
        {
            question: "Does it generate audio or synthesizer parameters?",
            answer:
                "The focus is on synthesizer parameters. The goal is to give you an editable patch foundation, not just a finished audio result.",
        },
        {
            question: "Will it process audio offline?",
            answer:
                "Yes. Offline processing is part of the product direction so source audio can be analyzed without depending on a live cloud workflow.",
        },
        {
            question: "Which plugin formats are planned?",
            answer:
                "Plugin formats are planned for future versions, and the exact list will be shared as development progresses.",
        },
        {
            question: "When will the private demo be available?",
            answer:
                "Join the private demo list for early access updates and release timing as they become available.",
        },
    ],
};

export default config;