module Lib
    ( someFunc
    ) where

someFunc :: IO ()
someFunc = do
  putStrLn "someFunc !"
  l <- getLine
  print (l ++ " !!")

newtype MaybeIO a = MaybeIO { runMaybeIO :: IO (Maybe a) }

instance Functor MaybeIO where
  fmap f = MaybeIO . fmap (fmap f) . runMaybeIO
  
instance Applicative MaybeIO where
  pure    = MaybeIO . pure . pure
  f <*> x = MaybeIO $ (<*>) <$> f' <*> x'
            where
              f' = runMaybeIO f
              x' = runMaybeIO x
