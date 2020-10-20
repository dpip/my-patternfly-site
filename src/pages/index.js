import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import {
  Brand,
  Button,
  Card,
  CardActions,
  CardHeaderMain,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Split,
  SplitItem,
  Text,
  TextContent,
  TextVariants,
} from "@patternfly/react-core"
import { TimesIcon } from "@patternfly/react-icons"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Card>
      <CardHeader>
        <CardHeaderMain>
          <Brand
            src="https://pf4.patternfly.org/assets/images/pf-logo-small.svg"
            alt="Patternfly Logo"
          />
        </CardHeaderMain>
        <CardActions>
          <Button variant="plain">
            <TimesIcon />
          </Button>
        </CardActions>
      </CardHeader>
      <CardTitle></CardTitle>
      <CardBody></CardBody>
      <CardFooter></CardFooter>
    </Card>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
