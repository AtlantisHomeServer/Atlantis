name := "Atlantis"

version := "0.0.1"

lazy val `atlantis` = (project in file(".")).enablePlugins(PlayScala)

packageName in Universal := "atlantis"

scalaVersion := "2.11.7"

libraryDependencies ++= Seq( jdbc , cache , ws   , specs2 % Test )

unmanagedResourceDirectories in Test <+=  baseDirectory ( _ /"target/web/public/test" )  

resolvers += "scalaz-bintray" at "https://dl.bintray.com/scalaz/releases"  