import React, { Component } from "react";

export default class extends Component {
  render() {
    return (
      <>
        <div className="container mx-auto pl-10 pr-10 mt-10 mb-10">
          <div className="grid gap-12 grid-cols-2">
            <img
              src="https://images.unsplash.com/photo-1488751045188-3c55bbf9a3fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
              className="shadow-lg"
            />
            <div>
              <h1 className="text-4xl pb-4">
                Documentation for React Projects
              </h1>
              <p className="pb-4">24 MAY, 2019</p>
              <span className="main-content mt-10 leading-8">
                <p>
                  {" "}
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Maecenas congue venenatis
                  odio a commodo. Praesent semper turpis tincidunt urna
                  vestibulum, et rutrum sem porta. Curabitur varius, purus sit
                  amet consequat rhoncus, dolor arcu rhoncus nibh, quis porta ex
                  metus vehicula mi. Nunc pellentesque cursus enim, et bibendum
                  ex varius id. Sed fringilla lacus metus, a condimentum felis
                  suscipit in. Praesent dictum lorem ut ex facilisis, at
                  facilisis justo vulputate. Suspendisse mollis magna augue,
                  vitae imperdiet tellus efficitur sit amet. Morbi hendrerit
                  iaculis ante sed semper. Suspendisse nunc ante, condimentum
                  egestas tincidunt vel, vehicula sed enim. Vestibulum dictum ut
                  orci id fringilla. Nullam et mi porta, pretium nisl ut, porta
                  neque. Mauris hendrerit nibh non diam semper consequat. Ut vel
                  sollicitudin ex. Fusce a tortor eget lacus mattis volutpat et
                  rutrum elit. In sollicitudin varius ornare.{" "}
                </p>
                <br/>
                <p>
                  Aliquam erat volutpat. Proin accumsan vulputate turpis. Aenean
                  at justo risus. Nullam et rhoncus leo. Cras sit amet dictum
                  ipsum. Aliquam eu neque mauris. Morbi neque urna, molestie in
                  magna sed, commodo accumsan est. Fusce eu nisl eget orci
                  semper vulputate. Aliquam tempor mi non laoreet facilisis. Sed
                  ac felis libero. Suspendisse et gravida libero. Maecenas eget
                  vehicula enim. Pellentesque pellentesque elit mattis fermentum
                  interdum. Maecenas auctor vehicula rutrum. Donec pellentesque
                  ante at nunc porta hendrerit.
                </p>
                <br/>
                <p>
                  Fusce in rutrum turpis. Morbi luctus elit malesuada velit
                  pretium posuere. Ut nisl turpis, pretium at magna eget,
                  rhoncus efficitur est. Vivamus a magna sapien. Integer et
                  metus molestie, rutrum erat in, efficitur diam. Donec et metus
                  vestibulum, faucibus velit quis, condimentum massa. Aenean
                  commodo, felis a lobortis faucibus, neque erat dictum mi, ut
                  aliquam orci sapien in ligula. Phasellus auctor luctus dui, id
                  lacinia elit tempor eu. Sed aliquam est non lobortis laoreet.
                  Fusce dictum tortor vel suscipit blandit. Suspendisse
                  fermentum dui a lacinia suscipit. Vestibulum turpis justo,
                  lacinia sit amet eros nec, congue viverra dolor. Sed mollis
                  vulputate urna at posuere. Nam augue elit, scelerisque at
                  volutpat ac, auctor quis risus. Curabitur pretium mollis
                  nulla, a luctus lectus maximus et.
                </p>
                <br/>
                <p>
                  Donec et lacus sollicitudin, consequat leo sit amet, faucibus
                  quam. Quisque fringilla diam id tellus facilisis, eget
                  vestibulum mauris venenatis. Duis molestie eu tellus vel
                  finibus. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Interdum et malesuada fames ac ante ipsum primis in
                  faucibus. Suspendisse malesuada libero quis velit commodo
                  blandit. Mauris tincidunt ante ac lorem pulvinar maximus a sit
                  amet nisl. Duis congue libero at risus dictum, a venenatis ex
                  tincidunt.
                </p>
              </span> 
                <div className='flex mt-10 space-x-4'>
                  <p> #javascript </p>
                  <p> #webdev </p>
                  <p> #Next </p>
                  <p> #Tailwind </p>
                </div>
            </div>
          </div>
          <div className='mt-20 mb-10 text-center'>
            <p> Made in ♥️ with Next.js and Tailwind </p>
          </div>
        </div>
      </>
    );
  }
}
