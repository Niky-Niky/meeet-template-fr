import { Button } from "./components/Button/Button"
import { Description } from "./components/Description/Description"
import { GlobalStyle } from "./components/Global.styled"
import { Header } from "./components/Header/Header"
import { TheLogo } from "./components/Logo/Logo"
import { FollowUs } from "./components/Follow Us/FollowUs"
import { Avatars } from "./components/Avatars/Avatars"
import { Container } from "./components/Global.styled"
export const App = () => {
  return(
    <>
      <Container/>
      <GlobalStyle/>
      <TheLogo/>
      <Header/>
      <Description/> 
      <Button/>
      <FollowUs/>
      <Avatars/>
    </>
    
  )
}

