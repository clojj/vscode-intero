module Main where

import Lib
import Control.Monad.Trans.State 

type Score = Int
type CountState = (Bool, Score)
 
startState :: CountState
startState = (False, 5)

play :: String -> State CountState Score
play []     = do
              (_, score) <- get
              return score
play (x:xs) = do
 (on, score) <- get
 case x of
   'X' -> state $ \(_, i)  -> ((), (True, i + 42))
   'C' -> if on then put (on, score + 1) else put (on, score)
   'A' -> if on then put (on, score - 1) else put (on, score)
   'T' -> put (False, score)
   'G' -> put (True, score)
   _   -> put (on, score)
 play xs

main :: IO ()
--main = print $ runState (play "GACAACCCCCCTCGXAAT") startState
main = do
  someFunc 
  print $ runState (play "X") startState
