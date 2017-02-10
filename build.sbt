
name := "Atlantis"

version := "0.0.1"

lazy val `atlantis` = (project in file(".")).enablePlugins(PlayScala)

packageName in Universal := "atlantis"

scalaVersion := "2.11.7"

libraryDependencies ++= Seq(
  jdbc,
  cache,
  ws,
  specs2 % Test,
  "com.codeborne" % "phantomjsdriver" % "1.2.1"
)

unmanagedResourceDirectories in Test <+=  baseDirectory ( _ /"target/web/public/test" )

PlayKeys.playRunHooks <+= baseDirectory.map(Webpack.apply)

routesGenerator := InjectedRoutesGenerator

excludeFilter in (Assets, JshintKeys.jshint) := "*.js"

watchSources ~= { (ws: Seq[File]) =>
  ws filterNot { path =>
    path.getName.endsWith(".js") || path.getName == ("build")
  }
}

pipelineStages := Seq(digest, gzip)

resolvers += "scalaz-bintray" at "https://dl.bintray.com/scalaz/releases"  