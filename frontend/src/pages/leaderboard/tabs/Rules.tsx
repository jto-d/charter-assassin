import {
  List,
  ListItem,
  ListIcon,
  UnorderedList,
  Text,
  Stack,
  Card,
} from "@chakra-ui/react";

import { TimeIcon, ViewIcon } from "@chakra-ui/icons";

/**
 * Description of the rules and regulations of the game. Includes a few links
 * to a GroupMe, safe zones, safeties, etc.. This page is updated frequently
 * when there are new changes.
 */
function Rules() {
  return (
    <Stack alignItems="center">
      <Card
        variant="outline"
        boxShadow={"lg"}
        width="90%"
        minWidth="400px"
        padding={4}
        backgroundColor="yellow.100"
        display="flex"
        alignItems="center"
      >
        <Text fontWeight="extrabold">WARNING</Text>
        <Text fontWeight="normal" align="center">
          These rules are subject to slight changes, however changes will be
          announced{" "}
          <a href="https://groupme.com/join_group/103844291/n67vZ1O7">
            <Text display="inline" color="blue.400">
              in the GroupMe
            </Text>
          </a>{" "}
          as they arise throughout the course of the game.
        </Text>
      </Card>
      <UnorderedList maxWidth="500px">
        <ListItem fontWeight="bold">
          Getting someone "out"
          <UnorderedList fontWeight="normal">
            <ListItem>
              You must squirt them with water directly from a water gun. The
              mechanism of water delivery must be from a water gun. Other
              delivery methods, such as a water bottle or a cup of beer, do not
              count.
            </ListItem>
            <ListItem>
              The kill must be caught on video and uploaded to the GroupMe,
              linked{" "}
              <a href="https://groupme.com/join_group/103844291/n67vZ1O7">
                <Text display="inline" color="blue.400">
                  HERE
                </Text>
              </a>
              . You must include the full name of the person you have killed.
            </ListItem>
            <ListItem>
              Once both members of a team have been eliminated, it will be registered here
              and will be displayed publicly on the leaderboard.
            </ListItem>
            <ListItem>
              After a kill is registered, the target of the killed will be
              reassigned to that of whom they were killed by.
            </ListItem>
            <ListItem>
              Kills are only valid during rounds (see info about rounds below). That is, in between the end of
              a round and the start of the next, kills will not count. Kills
              must be sent in the GroupMe prior to the round ending, or they
              will not count.
            </ListItem>
            <ListItem>
              There are no shields. Holding a book up to protect yourself and
              "deflect" the water will still count as a kill.
            </ListItem>
          </UnorderedList>
        </ListItem>
        <ListItem fontWeight="bold">
          Auto-elimination
          <UnorderedList fontWeight="normal">
            <ListItem>
              There are 3 rounds of auto-elimination (rounds 1, 2, and 3), where
              teams must have a certain number of kills to move on.
            </ListItem>
            <ListItem>
              If a player does not have the minimum number of kills upon that
              round ending, they will be automatically eliminated.
            </ListItem>
            <ListItem>
              The kills do not have to be in the relevant round. A team must
              meet the threshold in total kills, which includes those from
              previous rounds.
            </ListItem>
          </UnorderedList>
        </ListItem>
        <ListItem fontWeight="bold">
          Safeties
          <UnorderedList fontWeight="normal">
            <ListItem>
              There will be a different “safety” every day. A “safety” is a
              different task that must be continuously performed in order to
              remain invulnerable.
            </ListItem>
            <ListItem>
              As the game progresses, safeties will continue to get more and
              more difficult.
            </ListItem>
            <ListItem>
              The day before the end of a round, there will be no daily safety.
              Safe zones (as listed below) are still valid during these days.
              This presents an opportunity for everyone to eliminate their
              target, regardless of who they are assigned.
            </ListItem>
          </UnorderedList>
        </ListItem>
        <ListItem fontWeight="bold">
          Safe zones
          <UnorderedList fontWeight="normal">
            <ListItem>
              This is the exhaustive list of places where a player cannot be
              killed.
              <UnorderedList fontWeight="normal">
                <ListItem>
                  The interior of any eating club, and all Charter property.
                </ListItem>
                <ListItem>
                  Dining halls.
                </ListItem>
                <ListItem>
                  Places of worship.
                </ListItem>
                <ListItem>
                  Practice and competition (during, and preparing for), but not
                  travelling to/from.
                </ListItem>
                <ListItem>
                  Own bedrooms, but common rooms, dorm hallways, and other's
                  bedrooms are fair game (Please use common sense).
                </ListItem>
                <ListItem>
                  Classrooms are safe ONLY during midterms/exams. More
                  specifically, the classroom is safe while you are inside
                  (including as you are prepping and finishing the exam).
                </ListItem>
              </UnorderedList>
            </ListItem>
            <ListItem>
              Being in a safe zone means that you are unable to kill or be
              killed. That is, kills from a player inside a safe zone to a
              player outside of a safe zone are not valid.
            </ListItem>
          </UnorderedList>
        </ListItem>
        <ListItem fontWeight="bold">
          Timeline
          <UnorderedList fontWeight="normal">
            <ListItem>
              There will be a total of 4 rounds, summing up to 22 days of
              in-game chaos (excluding breaks).
            </ListItem>
            <ListItem>
              At the end of every round, all targets will be shuffled.
            </ListItem>
            <ListItem>
              The last round will be ANARCHY, which means there will be no
              safety, no safe words, and no safe zones.
            </ListItem>
            <ListItem>
              At the end of 11/26, if there is still more than a single person
              remaining, there will be a duel between the two remaining
              participants with the most kills.
            </ListItem>
            <ListItem>
              Under NO circumstances will there be multiple winners. There will
              be a SINGLE winner.
            </ListItem>
          </UnorderedList>
        </ListItem>
        <ListItem fontWeight="bold">
          Important dates
          <List fontWeight="normal">
            <ListItem>
              <ListIcon as={ViewIcon} color="green.500" />
              INITIAL TARGETS ANNOUNCED: 10/28 9AM
            </ListItem>
            <ListItem>
              <ListIcon as={TimeIcon} color="green.500" />
              START of ROUND 1: 10/28 9AM
            </ListItem>
            <ListItem>
              <ListIcon as={TimeIcon} color="red.500" />
              END of ROUND 1: 11/6 11:59PM (1 total kill required)
            </ListItem>
            <ListItem>
              <ListIcon as={TimeIcon} color="green.500" />
              START of ROUND 2: 11/7 9AM
            </ListItem>
            <ListItem>
              <ListIcon as={TimeIcon} color="red.500" />
              END of ROUND 2: 11/15 11:59PM (2 total kills required)
            </ListItem>
            <ListItem>
              <ListIcon as={TimeIcon} color="green.500" />
              START of ROUND 3: 11/16 9AM
            </ListItem>
            <ListItem>
              <ListIcon as={TimeIcon} color="red.500" />
              END of ROUND 3: 11/23 11:59PM (3 total kills required)
            </ListItem>
            <ListItem>
              <ListIcon as={TimeIcon} color="green.500" />
              START of ANARCHY: 11/24 9AM
            </ListItem>
            <ListItem>
              <ListIcon as={TimeIcon} color="red.500" />
              END of GAME: 11/26 11:59PM
            </ListItem>
          </List>
        </ListItem>
        <ListItem fontWeight="bold">
          Additional
          <UnorderedList fontWeight="normal">
            <ListItem>
              Let me know if the website is bugging out or it breaks completely,
              JOD will fix it ASAP.
            </ListItem>
            <ListItem>
              If there is a dispute, it will be ruled by majority vote of 1
              (Senne) or by groupme poll if applicable.
            </ListItem>
          </UnorderedList>
        </ListItem>
      </UnorderedList>
    </Stack>
  );
}

export default Rules;
