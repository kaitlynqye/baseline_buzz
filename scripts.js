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
  