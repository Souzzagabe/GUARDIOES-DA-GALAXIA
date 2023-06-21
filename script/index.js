const members = [
  { name: 'Peter Quill', id: 'peter' },
  { name: 'Gamora Titan', id: 'gamora' },
  { name: 'Drax o Destruidor', id: 'drax' },
  { name: 'Mantis', id: 'mantis' },
  { name: 'Rocket Raccoon', id: 'rocket' },
  { name: 'I am Groot', id: 'groot' },
]

let activeMember = 0

const images = document.getElementById('images')
const menu = document.getElementById('menu')
const navigation = document.getElementById('navigation')
const memberName = document.getElementById('member__name')

function changeStatusButtons() {
  const prevButton = document.getElementById('button__prev');
  const nextButton = document.getElementById('button__next');

  const isFirst = activeMember === 0;
  const isLast = activeMember === members.length - 1;

  prevButton.disabled = isFirst;
  nextButton.disabled = isLast;
}

function changeMember(memberId) {
  activeMember = memberId
  const member = members[activeMember]

  console.log(activeMember, member);

  images.style.transform = `translateY(${-100 * activeMember}vh)`
  memberName.classList = member.id
  changeName(member.name)

  changeStatusButtons()

}

function navigationMember(direction) {
  changeMember(activeMember + direction)

}

function changeMenu() {
  menu.classList.toggle('active')
  navigation.classList.toggle('active')
}

function setMember(memberId) {
  changeMember(memberId);
  changeMenu()
}
