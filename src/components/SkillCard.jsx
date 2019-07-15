import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const Text = styled.div`
  text-align: center;
  ${tw`opacity-70 font-sans text-xl text-orange`};
  text-shadow: 0 2px 8px rgba(0, 0, 0, .6);
`

const SkillCard = ({ skill }) => (
    <Text>{skill}</Text>
)

export default SkillCard

SkillCard.propTypes = {
  skill: PropTypes.string.isRequired,
}