import { useState, useEffect } from 'react';

const stats = [
    { id: 1, name: 'Number of Customer', value: '44 million' },
    { id: 2, name: 'Number of Company', value: '20 +' },
    { id: 3, name: 'Rank in the Market', value: '1' },
];

export default function CompanyOverview() {
    const [showStats, setShowStats] = useState(false);

    useEffect(() => {
        setShowStats(true); // Trigger animation on component mount
    }, []);

    return (
        <div className="bg-gray-800 sm:py-12">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <dl className="grid grid-cols-1 gap-x-8 text-center lg:grid-cols-3">
                    {stats.map((stat) => (
                        <div key={stat.id} className={`mx-auto flex max-w-xs flex-col gap-y-4 ${showStats ? 'animate-grow' : ''}`}>
                            <dt className="text-base leading-7 text-white">{stat.name}</dt>
                            <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                                {showStats && (
                                    <span>
                                        <AnimatedValue value={extractNumericValue(stat.value)} />
                                        {' '}
                                        {extractWord(stat.value)}
                                        {extractPlusSign(stat.value)}
                                    </span>
                                )}
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>
        </div>
    );
}

// Function to extract numeric value from a string
function extractNumericValue(value) {
    const matches = value.match(/\d+/); // Extract numeric part using regular expression
    return matches ? parseInt(matches[0]) : 0; // Parse the extracted numeric part to an integer
}

// Function to extract word from a string
function extractWord(value) {
    const matches = value.match(/[a-zA-Z]+/); // Extract word using regular expression
    return matches ? matches[0] : ''; // Return the extracted word
}

// Function to check if a "+" sign exists in a string
function extractPlusSign(value) {
    return value.includes('+') ? '+' : ''; // Return "+" if found, otherwise an empty string
}

// AnimatedValue component to animate from 0 to a given end value
// eslint-disable-next-line react/prop-types
function AnimatedValue({ value }) {
    const [displayedValue, setDisplayedValue] = useState(0);

    useEffect(() => {
        let animationInterval;
        if (value > 0) {
            const increment = Math.ceil(value / 100); // Adjust the increment as needed
            animationInterval = setInterval(() => {
                setDisplayedValue(prevValue => {
                    if (prevValue + increment >= value) {
                        clearInterval(animationInterval);
                        return value;
                    }
                    return prevValue + increment;
                });
            }, 50); // Adjust interval as needed for slower animation
        }

        return () => clearInterval(animationInterval);
    }, [value]);

    return <span>{displayedValue.toLocaleString()}</span>; // Format number with commas
}
