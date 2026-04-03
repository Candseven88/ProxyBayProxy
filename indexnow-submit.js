/**
 * IndexNow Submission Script for ProxyBayProxy
 * Automatically submits updated URLs to search engines for instant indexing
 * 
 * Usage: node indexnow-submit.js
 * Or include in your deployment pipeline
 */

const https = require('https');

// Configuration
const config = {
    host: 'proxybayproxy.online',
    key: 'f0a3e465cbd2e95e8dbeb8c290f8a53a',
    keyLocation: 'https://proxybayproxy.online/f0a3e465cbd2e95e8dbeb8c290f8a53a.txt',
    searchEngines: [
        'api.indexnow.org',
        'www.bing.com',
        'search.seznam.cz',
        'yandex.com'
    ]
};

// URLs to submit for indexing
const urlsToSubmit = [
    'https://proxybayproxy.online/',
    'https://proxybayproxy.online/index.html',
    'https://proxybayproxy.online/piratebay-proxies.html',
    'https://proxybayproxy.online/1337x-piratebay-proxies.html',
    'https://proxybayproxy.online/1337x-proxies.html',
    'https://proxybayproxy.online/blog/',
    'https://proxybayproxy.online/blog/index.html',
    'https://proxybayproxy.online/blog/best-piratebay-proxies.html',
    'https://proxybayproxy.online/blog/unblock-piratebay.html',
    'https://proxybayproxy.online/blog/piratebay-mirror-sites.html'
];

/**
 * Submit URLs to IndexNow API
 * @param {string} searchEngine - The search engine endpoint
 * @param {Array} urls - Array of URLs to submit
 */
function submitToIndexNow(searchEngine, urls) {
    const postData = JSON.stringify({
        host: config.host,
        key: config.key,
        keyLocation: config.keyLocation,
        urlList: urls
    });

    const options = {
        hostname: searchEngine,
        port: 443,
        path: '/indexnow',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(postData),
            'User-Agent': 'ProxyBayProxy-IndexNow/1.0'
        }
    };

    const req = https.request(options, (res) => {
        console.log(`${searchEngine}: Status ${res.statusCode}`);
        
        if (res.statusCode === 200) {
            console.log(`✅ Successfully submitted ${urls.length} URLs to ${searchEngine}`);
        } else if (res.statusCode === 202) {
            console.log(`✅ URLs accepted by ${searchEngine} (processing)`);
        } else {
            console.log(`⚠️  ${searchEngine} responded with status ${res.statusCode}`);
        }

        res.on('data', (chunk) => {
            if (chunk.length > 0) {
                console.log(`Response from ${searchEngine}:`, chunk.toString());
            }
        });
    });

    req.on('error', (error) => {
        console.error(`❌ Error submitting to ${searchEngine}:`, error.message);
    });

    req.write(postData);
    req.end();
}

/**
 * Submit single URL to IndexNow (for individual page updates)
 * @param {string} url - Single URL to submit
 */
function submitSingleUrl(url) {
    console.log(`\n🚀 Submitting single URL: ${url}`);
    
    config.searchEngines.forEach(searchEngine => {
        setTimeout(() => {
            submitToIndexNow(searchEngine, [url]);
        }, Math.random() * 1000); // Random delay to avoid rate limiting
    });
}

/**
 * Submit all URLs to all search engines
 */
function submitAllUrls() {
    console.log(`\n🚀 Starting IndexNow submission for ${urlsToSubmit.length} URLs`);
    console.log(`📝 URLs to submit:`, urlsToSubmit);
    
    config.searchEngines.forEach((searchEngine, index) => {
        // Add delay between requests to different search engines
        setTimeout(() => {
            console.log(`\n📤 Submitting to ${searchEngine}...`);
            submitToIndexNow(searchEngine, urlsToSubmit);
        }, index * 2000);
    });
}

/**
 * Verify IndexNow key file accessibility
 */
function verifyKeyFile() {
    const options = {
        hostname: config.host,
        port: 443,
        path: `/${config.key}.txt`,
        method: 'GET'
    };

    const req = https.request(options, (res) => {
        if (res.statusCode === 200) {
            console.log(`✅ IndexNow key file is accessible at ${config.keyLocation}`);
            
            res.on('data', (chunk) => {
                const content = chunk.toString().trim();
                if (content === config.key) {
                    console.log(`✅ Key file contains correct key: ${config.key}`);
                    submitAllUrls();
                } else {
                    console.error(`❌ Key file content mismatch. Expected: ${config.key}, Got: ${content}`);
                }
            });
        } else {
            console.error(`❌ Key file not accessible. Status: ${res.statusCode}`);
            console.error(`Please ensure ${config.keyLocation} is accessible`);
        }
    });

    req.on('error', (error) => {
        console.error(`❌ Error verifying key file:`, error.message);
    });

    req.end();
}

// Main execution
console.log('🔍 ProxyBayProxy IndexNow Submission Tool');
console.log('==========================================');
console.log(`Host: ${config.host}`);
console.log(`Key: ${config.key}`);
console.log(`Key Location: ${config.keyLocation}`);
console.log(`Search Engines: ${config.searchEngines.join(', ')}`);

// Check if specific URL is provided as command line argument
const specificUrl = process.argv[2];
if (specificUrl) {
    if (specificUrl.startsWith('https://proxybayproxy.online/')) {
        submitSingleUrl(specificUrl);
    } else {
        console.error('❌ URL must be from proxybayproxy.online domain');
        process.exit(1);
    }
} else {
    // Verify key file first, then submit all URLs
    console.log('\n🔑 Verifying IndexNow key file...');
    verifyKeyFile();
}

// Handle process termination
process.on('SIGINT', () => {
    console.log('\n\n👋 IndexNow submission interrupted');
    process.exit(0);
});

console.log('\n💡 Usage examples:');
console.log('  Submit all URLs: node indexnow-submit.js');
console.log('  Submit single URL: node indexnow-submit.js https://proxybayproxy.online/blog/new-post.html');
