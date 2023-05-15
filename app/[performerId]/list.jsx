import { Badge } from "@/components/ui/badge"
import { Card, CardHeader } from "@/components/ui/card"

export async function List({ locationsData }) {
  console.log(locationsData)
  return (
    <section>
      <div className="container mx-auto mt-32 lg:px-20 xl:px-44">
        {locationsData.map((location) => (
          <div key={location.locationId}>
            <div className="mb-5 mt-7 flex space-x-2">
              <h1 className="text-2xl font-black leading-none">
                {location.title}
              </h1>{" "}
              <Badge className="flex w-14 justify-center">
                {location.locationId}
              </Badge>
            </div>
            <div className="grid grid-flow-row gap-4 md:grid-cols-3 lg:grid-cols-4">
              {location.eventInfo.map(
                (event) => (
                  console.log(event),
                  (
                    <Card key={event.eventId}>
                      <CardHeader>
                        <Badge variant="secondary">
                          eventId: {event.eventId}
                        </Badge>
                        <Badge variant="secondary">date: {event.date}</Badge>
                      </CardHeader>
                    </Card>
                  )
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
