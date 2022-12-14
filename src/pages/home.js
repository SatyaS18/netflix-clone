import React from "react";
import { OptForm, Feature } from "../components";
import { JumbotronContainer } from "../containers/jumbotron";
import { FaqsContainer } from "../containers/faqs";
import { FooterContainer } from "../containers/footer";
import { HeaderContainer } from "../containers/header";
export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>
            Unlimited films, TV programmes and more.
          </Feature.Title>
          <Feature.SubTitle>
            Watch anywhere. Cancel at any time.
          </Feature.SubTitle>
        </Feature>
        <OptForm>
          <OptForm.Input placeholder="Email Address" />
          <OptForm.Button>Try it now</OptForm.Button>
          <OptForm.Text>
            Ready to watch? Enter your email address to create or restart your
            membership
          </OptForm.Text>
        </OptForm>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
