import React from 'react'
import { useNavigate } from 'react-router-dom'
import './LandingPage.css'


export const LandingPage = () => {
    const navigate = useNavigate()
    return (
        <div className='FullContainer'>
            <div className='mainView'>
                <div className='navbar'>
                    <div className='navbarContain'>
                        <div className='navbarLogo'>
                            <img src='https://i.pinimg.com/564x/08/bc/96/08bc96ace860cceb2ea2eb1398ae30b1.jpg' alt='img' className='imagelogo' />
                        </div>
                        <div className='navbarOptions'>
                            <span>Inicio</span>
                            <a href='https://www3.animeflv.net/anime/chainsaw-man' target={'_blank'}>Ver Ahora</a>
                            <span onClick={()=>{
                                navigate('register')
                            }}>Ver mas</span>
                        </div>
                    </div>
                </div>
                <main>
                    <div className='bodyMain'>
                        <span style={{ fontWeight: '600' }}>This is...</span>
                        <h1 style={{ fontWeight: 'bold', fontSize: '40px', color: '#c3544b' }}>Chainsaw Man</h1>
                        <p style={{ fontWeight: '500', fontSize: '13px', color: '#2b312e' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                    </div>
                </main>
                <footer>
                    <div className='cardFooter'>
                        <img src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2fc0bbce-4105-4dd6-a0b3-19ece80f716f/dehdm3t-74dc3760-aef6-43f6-9b2d-6551fdfa9a07.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzJmYzBiYmNlLTQxMDUtNGRkNi1hMGIzLTE5ZWNlODBmNzE2ZlwvZGVoZG0zdC03NGRjMzc2MC1hZWY2LTQzZjYtOWIyZC02NTUxZmRmYTlhMDcucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.PEOBIl5RYkRwFNsGBNtNAd6vdWUM7YCsNHYNnA7UIuA' />
                    </div>
                    <div className='cardFooter'>
                        <img src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5fb7d836-1124-43d9-937c-f365d9aeaa8b/deajfk5-c6cf10d6-b81d-4be7-904b-e83402b16cb7.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzVmYjdkODM2LTExMjQtNDNkOS05MzdjLWYzNjVkOWFlYWE4YlwvZGVhamZrNS1jNmNmMTBkNi1iODFkLTRiZTctOTA0Yi1lODM0MDJiMTZjYjcucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.R-y6oSx5CO8tWjuyCcL6bISMHNZ907RlYJ6VRv447WE' />
                    </div>
                    <div className='cardFooter'>
                        <img src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b4231f0b-f076-429e-92d9-f82261746368/demsp39-f1533c5a-48ed-4062-bf6f-e9d89e62d320.png/v1/fill/w_847,h_943,strp/render___power_chainsaw_man_by_ishigagraph_demsp39-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTQyNSIsInBhdGgiOiJcL2ZcL2I0MjMxZjBiLWYwNzYtNDI5ZS05MmQ5LWY4MjI2MTc0NjM2OFwvZGVtc3AzOS1mMTUzM2M1YS00OGVkLTQwNjItYmY2Zi1lOWQ4OWU2MmQzMjAucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.fBkuTrFYgdqnR8xEPp-f0GaYKCpDBXrhEUnXo20VNao' />
                    </div>
                </footer>
            </div>
            <div className='sideView'>

            </div>
        </div>
    )
}
