import { Drash } from "../../../../mod.ts";

/**
 * @deprecated
 */
export default class TemplateEngineNullDataResource
  extends Drash.Http.Resource {
  static paths = ["/template-engine-null-data"];
  public GET() {
    this.response.headers.set("Content-Type", "text/html");
    const engine = new Drash.Compilers.TemplateEngine(
      Deno.realPathSync(".") + "/tests/integration/app_3001_views/templates",
    );
    this.response.body = engine.render("/user_null_data.html", null);
    return this.response;
  }
}
