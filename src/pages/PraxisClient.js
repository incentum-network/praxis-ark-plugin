
const rand = Math.floor((Math.random()*1000000)+1);
module.exports = {
  template: `
    <div style="overflow:hidden;" >
      <iframe src="https://praxis-client.web.app?uid=${rand}" class="w-full h-full" />
    </div>
  `
}
