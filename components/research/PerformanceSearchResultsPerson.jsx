import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Card, CardFooter, CardHeader } from "@/components/ui/card"

export default function PerformanceSearchResults({ results }) {
  console.log(results)
  if (!results || results.length === 0 || !results[0].person) {
    return <p>No results found.</p>
  }

  const content = Object.keys(results[0].person).map((personId) => {
    const person = results[0].person[personId]
    const event = results[0].person[personId].events.count

    return (
      <Link key={person.uid} href={`/${person.uid}/`}>
        <Card key={person.uid}>
          <CardHeader>{person.title}</CardHeader>
          <CardFooter>
            <Badge>Events {event}</Badge>
            <Badge variant="secondary">{person.uid}</Badge>
          </CardFooter>
        </Card>
      </Link>
    )
  })

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-flow-row gap-4">
      {content}
    </div>
  )
}
