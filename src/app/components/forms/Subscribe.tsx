import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BorderBeam } from "@/components/magicui/border-beam";

const Subscribe = () => {
  return (
    <Card className="relative w-[60%] overflow-hidden mt-5">
      <CardContent>
        <form>
          {/* <div className="grid w-full items-center gap-2"> */}
          <div className="flex gap-2">
            {/* <Label htmlFor="email">Email</Label> */}
            <Input id="email" type="email" placeholder="Enter your email" />
            <Button>Register</Button>
          </div>

          {/* </div> */}
        </form>
      </CardContent>

      <BorderBeam duration={8} size={100} />
    </Card>
  );
};

export default Subscribe;
