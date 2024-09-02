const groups = {
        "A": [
          {
            "Team": "Kanada",
            "ISOCode": "CAN",
            "FIBARanking": 7
          },
          {
            "Team": "Australija",
            "ISOCode": "AUS",
            "FIBARanking": 5
          },
          {
            "Team": "Grčka",
            "ISOCode": "GRE",
            "FIBARanking": 14
          },
          {
            "Team": "Španija",
            "ISOCode": "ESP",
            "FIBARanking": 2
          }
        ],
        "B": [
          {
            "Team": "Nemačka",
            "ISOCode": "GER",
            "FIBARanking": 3
          },
          {
            "Team": "Francuska",
            "ISOCode": "FRA",
            "FIBARanking": 9
          },
          {
            "Team": "Brazil",
            "ISOCode": "BRA",
            "FIBARanking": 12
          },
          {
            "Team": "Japan",
            "ISOCode": "JPN",
            "FIBARanking": 26
          }
        ],
        "C": [
          {
            "Team": "Sjedinjene Države",
            "ISOCode": "USA",
            "FIBARanking": 1
          },
          {
            "Team": "Srbija",
            "ISOCode": "SRB",
            "FIBARanking": 4
          },
          {
            "Team": "Južni Sudan",
            "ISOCode": "SSD",
            "FIBARanking": 34
          },
          {
            "Team": "Puerto Riko",
            "ISOCode": "PRI",
            "FIBARanking": 16
          }
        ]
    }

      const matchResults = {  
            "GER": [
              {
                "Date": "06/07/24",
                "Opponent": "FRA",
                "Result": "66-90"
              },
              {
                "Date": "19/07/24",
                "Opponent": "JPN",
                "Result": "104-83"
              }
            ],
            "FRA": [
              {
                "Date": "12/07/24",
                "Opponent": "SRB",
                "Result": "67-79"
              },
              {
                "Date": "19/07/24",
                "Opponent": "CAN",
                "Result": "73-85"
              }
            ],
            "JPN": [
                {
                    "Date": "19/07/24",
                    "Opponent": "GER",
                    "Result": "83-104"
                },
                {
                  "Date": "21/07/24",
                  "Opponent": "SRB",
                  "Result": "100-119"
                }
            ],
            "USA": [
              {
                "Date": "20/07/24",
                "Opponent": "SSD",
                "Result": "101-100"
              },
              {
                "Date": "22/07/24",
                "Opponent": "GER",
                "Result": "92-88"
              }
            ],
            "CAN": [
              {
                "Date": "11/07/24",
                "Opponent": "USA",
                "Result": "72-86"
              },
              {
                "Date": "21/07/24",
                "Opponent": "PRI",
                "Result": "103-93"
              }
            ],
            "AUS": [
              {
                "Date": "15/07/24",
                "Opponent": "USA",
                "Result": "92-98"
              },
              {
                "Date": "19/07/24",
                "Opponent": "PRI",
                "Result": "90-75"
              }
            ],
            "SRB": [
              {
                "Date": "21/07/24",
                "Opponent": "JPN",
                "Result": "119-100"
              },
              {
                "Date": "22/07/24",
                "Opponent": "GRE",
                "Result": "94-72"
              }
            ],
            "PRI": [
              {
                "Date": "16/07/24",
                "Opponent": "GRE",
                "Result": "65-67"
              },
              {
                "Date": "19/07/24",
                "Opponent": "AUS",
                "Result": "75-90"
              }
            ],
            "GRE": [
              {
                "Date": "16/07/24",
                "Opponent": "PRI",
                "Result": "67-65"
              },
              {
                "Date": "22/07/24",
                "Opponent": "SRB",
                "Result": "72-94"
              }
            ],
            "BRA": [
              {
                "Date": "12/07/24",
                "Opponent": "POR",
                "Result": "63-73"
              },
              {
                "Date": "19/07/24",
                "Opponent": "ESP",
                "Result": "72-76"
              }
            ],
            "SSD": [
              {
                "Date": "15/07/24",
                "Opponent": "BRA",
                "Result": "72-81"
              },
              {
                "Date": "20/07/24",
                "Opponent": "USA",
                "Result": "100-101"
              }
            ],
            "ESP": [
              {
                "Date": "19/07/24",
                "Opponent": "BRA",
                "Result": "76-72"
              },
              {
                "Date": "23/07/24",
                "Opponent": "PRI",
                "Result": "107-84"
              }
            ]
        }

      
            const teamNamesByISO = {};
              for (const group in groups) {
              groups[group].forEach(team => {
              teamNamesByISO[team.ISOCode] = team.Team;
            });
        }

     
        const allRankedTeams = [];
  
            function simulateMatch (team1, team2) {
                
                if (!team1 || !team2) {
                  console.error("One or more team objects are undefined.", team1, team2)
                  return null;
                }
                const rankDifference = team1.FIBARanking - team2.FIBARanking;
                
                
                const possibilityTeam1Wins = 1 / (1 + Math.pow(10, rankDifference / 400));

                

                const randomValue = Math.random();

                

                if (randomValue < possibilityTeam1Wins) {
                    saveMatchResult(team1.ISOCode, team2.ISOCode, `${Math.floor(Math.random() * 100)}-${Math.floor(Math.random() * 100)}`);
                    return team1;
                } else {
                    saveMatchResult(team2.ISOCode, team1.ISOCode, `${Math.floor(Math.random() * 100)}-${Math.floor(Math.random() * 100)}`);
                    return team2;
                }

                function saveMatchResult(team1ISO, team2ISO, score) {
                    if (!matchResults[team1ISO]) matchResults[team1ISO] = [];
                    if (!matchResults[team2ISO]) matchResults[team2ISO] = [];
                
                    matchResults[team1ISO].push({ "Opponent": team2ISO, "Result": score });
                    matchResults[team2ISO].push({ "Opponent": team1ISO, "Result": score });
                }

            }


            function simulateGroupStage (groups) {
                for (const groupName in groups) {
                    //console.log(`Results for group ${groupName}`);
                    const teams = groups[groupName];

                for (let i = 0; i < teams.length; i++) {
                        for (let j = i + 1; j < teams.length; j++){
                            const result = simulateMatch (teams[i], teams[j]);
                            //console.log(`${teamNamesByISO[result.ISOCode]} wins`);     
                            //console.log(result);
                        }
                    }
                }
            }

          simulateGroupStage(groups);


          function calculatePointsForTeams (teams, matchResults) {
            console.log(`Teams in Group: ${JSON.stringify(teams)}`);
            console.log(`Match Results: ${JSON.stringify(matchResults)}`);
            
            return teams.map(team => {
                

                const teamResults = matchResults[team.ISOCode];
                console.log("Match Results for", team.ISOCode, ":", teamResults);
                


                if (!teamResults) {
                    console.error(`No match results found for team ${team.ISOCode}`);
                    return { ...team, Points: 0, PointDifference: 0, PointsScored: 0 };
                }
                   
                let points = 0;
                let pointDifference = 0;
                let pointsScored = 0;

                teamResults.forEach(match => {
                    console.log("Processing Match for", team.ISOCode, "vs", match.Opponent, "Result:", match.Result);

                    if (match?.Result) {

                    const [teamScore, opponentScore] = match.Result.split('-').map(Number);
                    pointsScored += teamScore
                    pointDifference += teamScore - opponentScore;

                    if (teamScore > opponentScore) {
                        points += 2;
                    } else {
                        points += 1;
                    }
                } else {
                    console.error(`Invalid result format for team ${team.ISOCode} in match against ${match.Opponent}`);
                }

            });

                

                return {...team, Points: points, PointDifference: pointDifference, PointsScored: pointsScored};
            });

        }

           function rankTeamsWithinGroup(teams, matchResults) {
             console.log(`Teams in Group: ${JSON.stringify(teams)}`);
             console.log(`Match Results: ${JSON.stringify(matchResults)}`);


            const rankedTeams = calculatePointsForTeams(teams, matchResults);

    
            rankedTeams.sort((a, b) => b.Points - a.Points || b.PointDifference - a.PointDifference || b.PointsScored - a.PointsScored);

    
            for (let i = 0; i < rankedTeams.length - 1; i++) {
                if (rankedTeams[i].Points === rankedTeams[i + 1].Points) {
                console.log(`Tiebreak between ${rankedTeams[i].ISOCode} and ${rankedTeams[i + 1].ISOCode}`);

                const team1Matches = matchResults[rankedTeams[i].ISOCode];
                const headToHeadMatch = team1Matches ? team1Matches.find(match => match.Opponent === rankedTeams[i + 1].ISOCode) : null;

                console.log(`Head-to-Head Match: ${JSON.stringify(headToHeadMatch)}`);

                if (!headToHeadMatch) {
                    console.error(`No head-to-head match found between ${rankedTeams[i].ISOCode} and ${rankedTeams[i + 1].ISOCode}`);
                continue;
                }

                if (!headToHeadMatch.Result) {
                    console.error(`Result missing for head-to-head match between ${rankedTeams[i].ISOCode} and ${rankedTeams[i + 1].ISOCode}`);
                continue;
                }
               

                 const [team1Score, team2Score] = headToHeadMatch.Result.split('-').map(Number);

                if (isNaN(team1Score) || isNaN(team2Score)) {
                    console.error(`Invalid score data for head-to-head match between ${rankedTeams[i].ISOCode} and ${rankedTeams[i + 1].ISOCode}: ${headToHeadMatch.Result}`);
                    continue;
                }

                console.log(`Head-to-Head Scores: ${rankedTeams[i].ISOCode} ${team1Score} - ${team2Score} ${rankedTeams[i + 1].ISOCode}`);

                if (team1Score < team2Score) {
                    
                    [rankedTeams[i], rankedTeams[i + 1]] = [rankedTeams[i + 1], rankedTeams[i]];
                    console.log(`Switching rank due to head-to-head result: ${rankedTeams[i + 1].ISOCode} won over ${rankedTeams[i].ISOCode}`);
            }
        }
    }
   
    //console.log(`Final Ranked Teams: ${JSON.stringify(rankedTeams)}`);
    return rankedTeams;
}
            
            const groupRankings = {};
            for (const groupName in groups) {
                const teams = groups[groupName];
                
            
                console.log(`Processing Group: ${groupName}`)
                console.log(`Teams in Group: ${JSON.stringify(teams)}`);
                //console.log(`Match Results: ${JSON.stringify(matchResults)}`);
                groupRankings[groupName] = rankTeamsWithinGroup (teams, matchResults);
            }
            
//console.log("Final Group Rankings:", JSON.stringify(groupRankings));


function rankTeamsAccrossGroups (groupRankings) {
  const allRankings = {
    first: [],
    second: [],
    third: []
  };

  for (const groupName in groupRankings) {
    const group = groupRankings[groupName];
    allRankings.first.push(group[0]);
    allRankings.second.push(group[1]);
    allRankings.third.push(group[2]);
  }

  const rankedFirst = allRankings.first.sort((a, b) => b.points - a.points || b.pointDifference - a.pointDifference || b.pointsScored - a.pointsScored);
  const rankedSecond = allRankings.second.sort((a, b) => b.points - a.points || b.pointDifference - a.pointDifference || b.pointsScored - a.pointsScored);
  const rankedThird = allRankings.third.sort((a, b) => b.points - a.points || b.pointDifference - a.pointDifference || b.pointsScored - a.pointsScored);

  return [...rankedFirst, ...rankedSecond, ...rankedThird];

}

const overallRankings = rankTeamsAccrossGroups (groupRankings);
console.log("Overall Rankings:", overallRankings);

const advancingTeams = overallRankings.slice(0, 8);
console.log("Advancing Teams:", advancingTeams);


const hats = {
  D: overallRankings.slice(0, 2), 
  E: overallRankings.slice(2, 4), 
  F: overallRankings.slice(4, 6), 
  G: overallRankings.slice(6, 8)  
};



console.log("Hats:");
console.log("Hat D", hats.D.map(team => teamNamesByISO[team.ISOCode]));
console.log("Hat E", hats.E.map(team => teamNamesByISO[team.ISOCode]));
console.log("Hat F", hats.F.map(team => teamNamesByISO[team.ISOCode]));
console.log("Hat G", hats.G.map(team => teamNamesByISO[team.ISOCode]));

function drawQuarterfinals() {
  
  const DGMatches = matchTeams(hats.D, hats.G);
  
  const EFMatches = matchTeams(hats.E, hats.F);

  return [...DGMatches, ...EFMatches];
}

function matchTeams(hat1, hat2) {
  
  shuffle(hat1);
  shuffle(hat2);
  const matches = [];

  hat1.forEach((team1, index) => {
      let team2 = hat2[index];
      // Provera da li su timovi već igrali jedni protiv drugih
      if (matchResults[team1.ISOCode].some(match => match.Opponent === team2.ISOCode)) {
          // Ako jesu, zameni timove
          team2 = hat2[(index + 1) % hat2.length];
      }
      matches.push({ home: team1, away: team2 });
  });

  return matches;
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}





const quarterfinals = drawQuarterfinals();
const quarterfinalWinners = quarterfinals.map(match => {
  const winner = simulateMatch(match.home, match.away);
  if (!winner) {
      console.error("Failed to determine a winner for match:", match);
      return null; 
  }
  return winner;
});

console.log("Quarterfinal Winners!");

quarterfinalWinners.forEach(winner => {
    if (winner) {
        console.log(winner.Team);
    } else {
        console.error("No valid winner for this match.");
    }
});



function drawSemifinals(quarterfinalWinners) {
  const semifinals = [
      { home: quarterfinalWinners[0], away: quarterfinalWinners[2] }, 
      { home: quarterfinalWinners[1], away: quarterfinalWinners[3] }  
  ];
  return semifinals;
  
}

const semifinals = drawSemifinals(quarterfinalWinners);
console.log("Semifinal Pairings");
semifinals.forEach(match => {
  if (!match.home || !match.away) {
      console.error("Invalid match setup, one or both teams are undefined:", match);
  } else {
      console.log(`${match.home.Team} vs. ${match.away.Team}`);
  }
});


function drawFinals(semifinalMatches) {
  const finalMatch = [];
  const thirdPlaceMatch = [];
  const winners = [];
  const losers = [];

  semifinalMatches.forEach(match => {
      const winner = simulateMatch(match.home, match.away);
      const loser = match.home === winner ? match.away : match.home;

      console.log("Winner:", winner ? winner.Team : "No Winner");
      console.log("Loser:", loser ? loser.Team : "No Loser");

      if (winner && loser) {
        winners.push(winner);
        losers.push(loser);
    }
  });

  if (winners.length === 2 && losers.length === 2) {
    finalMatch.push({ home: winners[0], away: winners[1] });
    thirdPlaceMatch.push({ home: losers[0], away: losers[1] });
} else {
    console.error('Failed to determine all winners and losers');
}

return { finalMatch, thirdPlaceMatch };
}



const finals = drawFinals(semifinals);
console.log("Finale:");
console.log(`${teamNamesByISO[finals.finalMatch[0].home.ISOCode]} - ${teamNamesByISO[finals.finalMatch[0].away.ISOCode]}`);
console.log("Utakmica za treće mesto:");
console.log(`${teamNamesByISO[finals.thirdPlaceMatch[0].home.ISOCode]} - ${teamNamesByISO[finals.thirdPlaceMatch[0].away.ISOCode]}`);

const semifinalWinners = semifinals.map(match => simulateMatch(match.home, match.away));
const semifinalLosers = semifinals.map((match, index) => {
    const winner = semifinalWinners[index];
    return match.home === winner ? match.away : match.home;
});


const finalists = [...semifinalWinners, ...semifinalLosers];
const resultsFromFinals = simulateFinals(finalists);

if (resultsFromFinals) {
  console.log(`Tournament Champion: ${teamNamesByISO[resultsFromFinals.champion.ISOCode]}`);
  console.log(`Third Place: ${teamNamesByISO[resultsFromFinals.thirdPlace.ISOCode]}`);
} else {
  console.error("Failed to simulate final matches properly.");
}



function simulateFinals (finalists) {
  if (!finalists || finalists.length < 4) {
    console.error("Invalid or insufficient data for finals simulation.");
    return null;
  }
  
  const finalMatch = simulateMatch (finalists[0], finalists[1]);
  const thirdPlaceMatch = simulateMatch(finalists[2], finalists[3]);
  

  return {
    champion: finalMatch,
    thirdPlace: thirdPlaceMatch
  };
}



if (!resultsFromFinals || !resultsFromFinals.champion || !resultsFromFinals.thirdPlace) {
  console.error("Failed to simulate final matches properly.");
} else {

}




 





 
