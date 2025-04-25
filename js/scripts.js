// Function to handle match reactions
function reactToMatch(matchId, reactionType) {
    const reactionElement = document.getElementById(matchId + '-reactions');
    let currentReactions = parseInt(reactionElement.innerText.replace('Reactions: ', ''));
  
    // Update the reaction count
    currentReactions++;
    reactionElement.innerText = `Reactions: ${currentReactions}`;
  
    // You can add further logic here for different reaction types like thumbs up, heart, etc.
    console.log(`Match ${matchId} received reaction: ${reactionType}`);
}

// Function to handle clicking and flipping the match cards
document.querySelectorAll('.match-card').forEach(card => {
    const inner = card.querySelector('.card-inner');

    // State flag on the card
    let isFlipped = false;

    card.addEventListener('click', () => {
        isFlipped = !isFlipped;
        inner.classList.toggle('flipped', isFlipped);
    });

    card.addEventListener('focus', () => {
        // Flip on focus if not already flipped by click
        if (!isFlipped) {
            inner.classList.add('flipped');
        }
    });

    card.addEventListener('blur', () => {
        // Unflip on blur only if it was not flipped by click
        if (!isFlipped) {
            inner.classList.remove('flipped');
        }
    });
});
  
// Function for flipping the bio cards for players
document.querySelectorAll('.flip-card').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });
});
  
  



